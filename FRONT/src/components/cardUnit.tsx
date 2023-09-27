

import { Typography, Paper, Grid, IconButton, Box } from '@mui/material';
import {
    ArrowCircleLeftOutlined,
    Edit,
    DeleteForeverOutlined,
    ArrowCircleRightOutlined
} from '@mui/icons-material';
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";

const handleCardActions = ({
    status,
    column,
    id,
    action
}: {
    status: string,
    column: string,
    id: string,
    action: string
}) => {

    console.log(status, id, column, action)
}

export const CardUnit = ({
    id,
    title,
    content,
    status,
    column,
}: {
    id: string,
    title: string,
    content: string,
    status: string,
    column: string
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
                    <IconButton color="primary" size="small" onClick={() => handleCardActions({ status, column, id, action: 'edit' })}>
                        <Edit />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container>
                <Typography sx={{ fontSize: 12, fontWeight: 'bold' }} paragraph>
                    <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
                </Typography>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton color="primary" size="small" onClick={() => handleCardActions({ status, column, id, action: 'moveLeft' })} disabled={column === 'ToDo'}>
                    <ArrowCircleLeftOutlined />
                </IconButton>

                <IconButton color="primary" size="small" onClick={() => handleCardActions({ status, column, id, action: 'delete' })}>
                    <DeleteForeverOutlined />
                </IconButton>

                <IconButton color="primary" size="small" onClick={() => handleCardActions({ status, column, id, action: 'moveRight' })} disabled={status === 'Done'}>
                    <ArrowCircleRightOutlined />
                </IconButton>
            </Box>
        </Paper >
    )
}

export default CardUnit
