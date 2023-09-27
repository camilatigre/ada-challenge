

import { Typography, Paper, Grid, IconButton, Box } from '@mui/material';
import {
    ArrowCircleLeftOutlined,
    Edit,
    DeleteForeverOutlined,
    ArrowCircleRightOutlined
} from '@mui/icons-material';
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import { useStore } from '../store';
const store = useStore()
const boardData = store.getBoardData()
const token = store.getToken()


const moveCard = async () => {
    if (token) {

        const cards = await updateCard({ token });
    }
};


const moveToRight = (status, column, id, boardData) => {

    for (let index = 0; index < boardData.length; index++) {
        if (boardData[index].columnName === column) {
            const cardSelected = boardData[index].cards.find(card => card.id === id)

        }
    }
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
                    <IconButton color="primary" size="small" onClick={() => handleCardActions({ status, column, id, boardData, action: 'edit' })}>
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
                <IconButton color="primary" size="small" onClick={() => handleCardActions({ status, column, id, boardData, action: 'moveLeft' })} disabled={column === 'ToDo'}>
                    <ArrowCircleLeftOutlined />
                </IconButton>

                <IconButton color="primary" size="small" onClick={() => handleCardActions({ status, column, id, boardData, action: 'delete' })}>
                    <DeleteForeverOutlined />
                </IconButton>

                <IconButton color="primary" size="small" onClick={() => moveToRight({ status, column, id, boardData })} disabled={status === 'Done'}>
                    <ArrowCircleRightOutlined />
                </IconButton>
            </Box>
        </Paper >
    )
}

export default CardUnit
