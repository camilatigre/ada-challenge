

import { Grid, Typography } from '@mui/material';
import { BoardItems } from '../types';
import ColumnUnit from './columnUnit';

export const Board = ({
    data
}: {
    data: Array<BoardItems>
}) => {
    return (
        <Grid container className='container-of-tasks'>
            <Typography variant="h3"> TASKS</Typography>

            <Grid container spacing={2}>
                {data ? data.map(item =>
                    <ColumnUnit title={item.title} columnName={item.columnName} cards={item.cards} />
                ) :
                    'Sem colunas no momento'
                }
            </Grid>
        </Grid>
    )
}

export default Board
