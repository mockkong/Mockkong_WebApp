// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Mockkong from 'components/mockkong';

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = ({ drawerOpen, drawerToggle }) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? 260 : 'auto' }} aria-label="mailbox folders">
            <Drawer
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 260,
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '88px'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                <BrowserView>
                    <Mockkong.UserProfile />
                </BrowserView>
                <MobileView>
                    <Mockkong.UserProfile />
                </MobileView>
            </Drawer>
        </Box>
    );
};

export default Sidebar;
