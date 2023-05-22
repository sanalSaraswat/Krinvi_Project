import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Image from './assets/image.png'
import Ellipse from './assets/Ellipse.png'

import './App.css'
import { useParams } from 'react-router-dom'

const Dashboard = () => {

    const { name } = useParams()


    return (
        <Container sx={{
            padding: '5% 0',
            height: '100%'
        }}>



            <img style={{
                marginLeft: '10%',
            }} src={Image}>

            </img>




            <Box sx={{
                width: '100%',
                height: '2px',
                backgroundColor: '#191919',
                opacity: '50%',

            }} />
            <Stack direction={'row'}>


                <Stack width={'30%'}
                    alignItems={'center'}
                    marginTop={'5%'}
                >

                    <img style={{
                        borderRadius: '50%',
                        marginBottom: '5%'
                    }} src={Ellipse} />

                    <Typography variant='h5'
                        fontWeight={'bold'}
                    >{name}</Typography>


                </Stack>

                <Box sx={{
                    height: '100%',
                    width: '2px',
                    backgroundColor: '#191919',
                    opacity: '50%',

                }} />

                <Stack direction={'row'}
                    width={'70%'}

                    gap={'5%'}
                >
                    <Button sx={{
                        width: '40%',
                        backgroundColor: '#005642',
                        color: 'white'
                    }}
                    >
                        Live Deals
                    </Button>

                    <Button sx={{
                        width: '40%',
                        backgroundColor: 'white',
                        color: '#005642',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                    }}

                    >
                        Most Funded
                    </Button>

                </Stack>

            </Stack>




        </Container>
    )
}

export default Dashboard