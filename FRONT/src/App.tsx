import { Grid } from '@mui/material';
import { Header } from './components/header'
import { Board } from './components/board'
const data = [
  { title: 'TO DO', cards: [{ id: 1, title: 'primeiro card a ser feito', content: 'conteudo generico', status: 'todo' }] },
  { title: 'DOING', cards: [{ id: 2, title: 'melhorar codigo', content: 'conteudo generico', status: 'doing' }, { id: 3, title: 'card de melhoria 2', content: 'conteudo generico 2', status: 'doing' }] },
  { title: 'DONE', cards: [{ id: 4, title: 'fazer deploy', content: 'passo a passo de deploy', status: 'done' }] }
]
const App = () => {
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
