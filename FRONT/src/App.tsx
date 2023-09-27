import { Grid } from '@mui/material';
import { Header } from './components/header'
import { Board } from './components/board'
import { login, getCards } from './api/routes';
import { useState, useEffect } from 'react';
import { BoardItems } from './types';
import { appendCardsToColumn } from './utils';

const App = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [boardData, setBoardData] = useState<Array<BoardItems> | null>([
    { columnName: 'ToDo', title: 'TO DO', cards: [] },
    { columnName: 'Doing', title: 'DOING', cards: [] },
    { columnName: 'Done', title: 'DONE', cards: [] }
  ])

  useEffect(() => {
    const fetchToken = async () => {
      const token = await login({ login: "letscode", senha: "lets@123" });

      setToken(token);
      localStorage.setItem("token", token);
    };

    fetchToken();
  }, []);

  const fetchCards = async () => {
    if (token) {
      setIsLoading(true);

      const cards = await getCards({ token });

      const updatedBoardData = appendCardsToColumn(cards, boardData)

      setBoardData(updatedBoardData);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, [token]);

  if (!token || !localStorage.getItem('token')) {
    return <>
      <Grid container>
        <Header showButton={false} />
        <Grid item sx={{ m: 4 }} width={300} alignContent={"center"}>{'Problemas com o login! Por favor, verifique as credenciais para visualizar o board.'}</Grid>
      </Grid>
    </>
  }


  return (
    <>
      <Grid container>
        <Header />
        {isLoading ? <div>Carregando...</div> : <Board data={boardData} />}
      </Grid>
    </>
  )
}

export default App
