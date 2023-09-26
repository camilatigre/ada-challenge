import { Grid, Typography, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { CardUnitProps } from '../types';
import CardUnit from './cardUnit';

export const ColumnUnit = ({
    title,
    cards
}: {
    title: string,
    cards: Array<CardUnitProps>
}) => {
    return (
        <Grid item sm={1} md={4}>
            <Box sx={{
                bgcolor: grey[200],
                borderRadius: 2,
                p: 2,
                my: 2
            }}>
                <Typography variant="h6">{title}</Typography>
                {cards ? cards.map(item => <CardUnit title={item.title} content={item.content} />) : ''}
            </Box>
        </Grid>
    )
}

export default ColumnUnit
