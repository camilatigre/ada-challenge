import { Grid } from '@mui/material';
import { Header } from './components/header'
import { Board } from './components/board'
import { login } from './api/routes';
import { useState, useEffect } from 'react';


const data = [
  { title: 'TO DO', cards: [{ id: 1, title: 'primeiro card a ser feito', content: 'conteudo generico', status: 'todo' }] },
  { title: 'DOING', cards: [{ id: 2, title: 'melhorar codigo', content: 'conteudo generico', status: 'doing' }, { id: 3, title: 'card de melhoria 2', content: 'conteudo generico 2', status: 'doing' }] },
  { title: 'DONE', cards: [{ id: 4, title: 'fazer deploy', content: 'passo a passo de deploy', status: 'done' }] }
]
const App = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await login({ login: "letscode", senha: "lets@123" });

      setToken(token);
      localStorage.setItem('token', token);
    };

    fetchToken();
  }, []);

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
        <Board data={data} />
      </Grid>
    </>
  )
}

export default App
