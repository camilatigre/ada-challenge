

import { Grid, Typography } from '@mui/material';
import { BoardItems } from '../types';
import ColumnUnit from './columnUnit';
import { FC } from 'react';

export const Board = ({
    data,
    handleCardActions
}: {
    data: Array<BoardItems>
    handleCardActions: FC
}) => {
    return (
        <Grid container className='container-of-tasks'>
            <Typography variant="h3"> TASKS</Typography>

            <Grid container spacing={2}>
                {data ? data.map(item =>
                    <ColumnUnit title={item.title} columnName={item.columnName} cards={item.cards} handleCardActions={handleCardActions} />
                ) :
                    'Sem colunas no momento'
                }
            </Grid>
        </Grid>
    )
}

export default Board
