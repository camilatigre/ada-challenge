

import { Typography, Paper, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
//cardtype
/**
 * 
 * titulo: string
 * conteudo: string
 * lista: ToDo | Doing | Done,
 * 
 */


export const CardUnit = ({
    id,
    title,
    content
}: {
    id: number,
    title: string,
    content: string
}) => {
    return (
        <Paper key={id} elevation={1} square={false} sx={{ padding: 2, my: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} gutterBottom>
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{ mb: 1 }}>
                    <IconButton color="primary" size="small">
                        <EditIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Typography sx={{ fontSize: 12, fontWeight: 'bold' }} paragraph>
                {content}
            </Typography>
        </Paper>
    )
}

export default CardUnit
