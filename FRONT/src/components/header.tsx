import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export const Header = ({ showButton = true }: { showButton?: boolean }) => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" className='logo-text' sx={{ flexGrow: 1 }}>
                    ADA TECH - KANBAN BOARD
                </Typography>
                {showButton && <Button startIcon={<AddOutlinedIcon />} variant="outlined" color="primary">ADD CARD</Button>}
            </Toolbar>
        </AppBar>
    )
}

export default Header;