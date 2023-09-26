import { Grid, Typography } from '@mui/material';
import { Header } from './components/header'
function App() {

  return (
    <>
      <Grid container>
        <Header />

        <Grid container className='container-of-tasks'>
          <Typography variant="h3"> Tasks</Typography>

          <Grid container spacing={0.5}>
            <Grid item sm={1} md={4}>
              <Typography variant="h6">TO DO</Typography>
            </Grid>
            <Grid item sm={1} md={4}>
              <Typography variant="h6">DOING</Typography>
            </Grid>
            <Grid item sm={1} md={4}>
              <Typography variant="h6">DONE</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default App
