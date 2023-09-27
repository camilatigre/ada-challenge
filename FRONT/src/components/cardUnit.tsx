

import { Typography, Paper, Grid, IconButton, Box } from '@mui/material';
import {
    ArrowCircleLeftOutlined,
    Edit,
    DeleteForeverOutlined,
    ArrowCircleRightOutlined
} from '@mui/icons-material';

import { FC } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";

export const CardUnit = ({
    id,
    title,
    content,
    status,
    onEdit,
    onDelete,
    moveLeft,
    moveRight,
}: {
    id: number,
    title: string,
    content: string,
    status: string,
    onEdit: FC,
    onDelete: FC,
    moveLeft: FC,
    moveRight: FC
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
                    <IconButton color="primary" size="small" onClick={onEdit}>
                        <Edit />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Typography sx={{ fontSize: 12, fontWeight: 'bold' }} paragraph>
                    <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
                </Typography>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton color="primary" size="small" onClick={moveLeft} disabled={status === 'todo'}>
                    <ArrowCircleLeftOutlined />
                </IconButton>

                <IconButton color="primary" size="small" onClick={onDelete}>
                    <DeleteForeverOutlined />
                </IconButton>

                <IconButton color="primary" size="small" onClick={moveRight} disabled={status === 'done'}>
                    <ArrowCircleRightOutlined />
                </IconButton>
            </Box>
        </Paper >
    )
}

export default CardUnit
