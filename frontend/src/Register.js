import { Box, Button, Checkbox, Container, FormControlLabel, InputAdornment, Stack, SvgIcon, TextField, ThemeProvider, Typography, createTheme, makeStyles } from '@mui/material'
import React, { useState } from 'react'
import Name from './assets/Name.png'
import Mail from './assets/Mail.png'
import Number from './assets/Number.png'
import LinkedIn from './assets/LinkedIn.png'
import Country from './assets/Country.png'
import State from './assets/State.png'
import City from './assets/City.png'
import Pincode from './assets/Pincode.png'
import { ReactComponent as Vector } from './assets/Vector.svg'
import { ReactComponent as Rafiki } from './assets/rafiki.svg'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './App.css'


// const theme = createTheme({
//     palette: {
//         primary: 'aqua',
//     },
// });

const Register = () => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [number, setNumber] = useState(null)
    const [linkedInLink, setLinkedInLink] = useState(null)
    const [country, setCountry] = useState(null)
    const [state, setState] = useState(null)
    const [city, setCity] = useState(null)
    const [pincode, setPincode] = useState(null)
    const navigate = useNavigate()


    function handleSubmit(event) {

        event.preventDefault()

        const data = {
            name: name,
            email: email,
            number: number,
            linkedInLink: linkedInLink,
            country: country,
            state: state,
            city: city,
            pincode: pincode
        }

        console.log(data)

        Axios.post('http://localhost:8000/api/insert', data)
            .then(() => {
                alert('Insert Successful')
            })

        navigate(`/${name}`)



    }

    function Icon(path) {

        return (
            <InputAdornment position="start">
                <img src={path} style={{
                    marginRight: '1rem',
                    width: '2rem',
                    height: '2rem'
                }} />
            </InputAdornment>
        )
    }


    return (

        <Container sx={{
            height: '100%'
        }} >

            <Vector className='vector' />
            <Rafiki className='rafiki' />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}

            >

                <Typography
                    sx={{
                        color: '#4A4A4A',
                        fontWeight: '600',
                        margin: '3% 0'
                    }}
                    variant='h4'
                >
                    Create <span style={{ color: '#005642' }} >Invester Profile</span>

                </Typography>

            </Box>

            <form onSubmit={handleSubmit}>


                <Stack
                    sx={{
                        alignItems: 'flex-end'
                    }}
                >

                    <TextField
                        required
                        placeholder='Name'
                        type='text'

                        sx={{
                            width: '50%',
                            backgroundColor: '#EBFFF7',
                            margin: ' 0 0 0.5rem',

                        }}
                        onChange={(e) => { setName(e.target.value) }}
                        InputProps={{
                            startAdornment: (
                                Icon(Name)
                            ),
                        }}
                    />

                    <TextField
                        required
                        placeholder='Email'
                        type='email'
                        sx={{
                            width: '50%',
                            backgroundColor: '#EBFFF7',
                            margin: ' 0 0 0.5rem',
                            borderRadius: '10px'
                        }}
                        onChange={(e) => { setEmail(e.target.value) }}
                        InputProps={{
                            startAdornment: (
                                Icon(Mail)
                            ),
                        }}
                    />

                    <TextField
                        required
                        placeholder='Phone no.'
                        type='tel'
                        sx={{
                            width: '50%',
                            backgroundColor: '#EBFFF7',
                            margin: ' 0 0 0.5rem'
                        }}
                        inputProps={{
                            maxLength: 10,
                        }}
                        onChange={(e) => { setNumber(e.target.value) }}
                        InputProps={{
                            startAdornment: (
                                Icon(Number)
                            ),
                            inputMode: 'tel'
                        }}
                    />

                    <TextField
                        required
                        placeholder='LinkedIn Link'
                        sx={{
                            width: '50%',
                            backgroundColor: '#EBFFF7',
                            margin: ' 0 0 0.5rem'
                        }}
                        onChange={(e) => { setLinkedInLink(e.target.value) }}
                        InputProps={{
                            startAdornment: (
                                Icon(LinkedIn)
                            ),
                            inputMode: 'url'
                        }}
                    />

                    <TextField
                        required
                        placeholder='Country'
                        type='text'
                        sx={{
                            width: '50%',
                            backgroundColor: '#EBFFF7',
                            margin: ' 0 0 0.5rem'
                        }}

                        onChange={(e) => { setCountry(e.target.value) }}
                        InputProps={{
                            startAdornment: (
                                Icon(Country)
                            ),
                        }}
                    />

                    <TextField
                        required
                        placeholder='State'
                        type='text'
                        sx={{
                            width: '50%',
                            backgroundColor: '#EBFFF7',
                            margin: ' 0 0 0.5rem'
                        }}


                        onChange={(e) => { setState(e.target.value) }}
                        InputProps={{
                            startAdornment: (
                                Icon(State)
                            ),
                        }}
                    />

                    <Stack
                        direction={'row'}
                        width={'100%'}
                        gap={'5%'}
                        justifyContent={'flex-end'}
                        marginBottom={'2%'}
                    >

                        <TextField
                            required
                            placeholder='City'
                            type='text'
                            sx={{
                                width: '22.5%',
                                backgroundColor: '#EBFFF7',
                                margin: ' 0 0 0.5rem'
                            }}

                            onChange={(e) => { setCity(e.target.value) }}
                            InputProps={{
                                startAdornment: (
                                    Icon(City)
                                ),
                            }}
                        />

                        <TextField
                            required
                            placeholder='Pincode'
                            type='pincode'
                            inputProps={{
                                maxLength: 6,
                                inputMode: 'numeric'
                            }}
                            sx={{
                                width: '22.5%',
                                backgroundColor: '#EBFFF7',
                                margin: ' 0 0 0.5rem'
                            }}

                            onChange={(e) => { setPincode(e.target.value) }}
                            InputProps={{
                                startAdornment: (
                                    Icon(Pincode)
                                ),
                            }}
                        />

                    </Stack>



                    <FormControlLabel


                        className='formControlLabel'

                        control={
                            <Checkbox
                                required
                                size='large'
                                style={{
                                    color: '#005642'
                                }}
                            />
                        }

                        label={
                            <Typography>I hereby by agree to terms and conditions and whatever information is asked for i have provided the right information.</Typography>
                        }

                    />

                    <button

                        type='submit'

                    >

                        Next
                    </button>


                </Stack>


            </form>




        </Container >

    )
}

export default Register