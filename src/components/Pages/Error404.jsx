import { Box, Typography } from '@mui/material'
import React from 'react'
import error from '../Images/error.png'
import { useMediaQuery } from 'react-responsive'


function Error404() {

    const isMobile = useMediaQuery({ query: '(max-width:500px)' })
    return (<>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
        <Box component={"img"} src={error} height={"35vh"} sx={{objectFit:"cover"}} width={"30vw"}/>
        <Typography variant={isMobile ? "h2" : 'h1'} textAlign={"center"} component={"p"}>Error404</Typography>
        <Typography variant='h5'  textAlign={"center"}>Page Not Found</Typography>
        </Box>
    </>
    )
}

export default Error404