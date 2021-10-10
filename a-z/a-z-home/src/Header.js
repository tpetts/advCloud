import React from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    return(
        <>
        <header>
            <h1>
                A-Z Home Improvements
            </h1>

            <nav>
                <a href="#"> Green Team </a>
                <a href="#"> Yellow Team </a>

            </nav>
        </header>
        </>
    )
}

export default function ButtonAppBar() {

    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton>

                    <MenuIcon />

                </IconButton>

            </Toolbar>

        </AppBar>

    </Box>
}

// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             A-Z Home Improvements
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }