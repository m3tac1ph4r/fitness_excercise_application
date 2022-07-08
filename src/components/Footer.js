import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
    return (
        <Box mt="80px" bgColor="#FFF3F4">
            <Stack gap="40px" alignItems='center' px="40px" pt="20px">
                {/* <img src={Logo} alt="Logo" width="200px" height="40px" /> */}
                <Typography variant="h5" pb="40px">
                    Made with ❤️ by m3tac1ph4r
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer