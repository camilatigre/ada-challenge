import { Grid, Typography, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { CardUnitProps } from '../types';
import CardUnit from './cardUnit';

const onFunc = () => 'teste'

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
                {cards ? cards.map(item =>
                    <CardUnit
                        id={item.id}
                        title={item.title}
                        content={item.content}
                        status={item.status}
                        onEdit={onFunc}
                        onDelete={onFunc}
                        moveLeft={onFunc}
                        moveRight={onFunc}
                    />
                ) : ''}
            </Box>
        </Grid>
    )
}

export default ColumnUnit
