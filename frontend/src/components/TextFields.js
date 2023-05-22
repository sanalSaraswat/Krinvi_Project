import { TextField } from '@mui/material'
import React from 'react'

const TextFields = () => {

    const Name = (<TextField

        placeholder='Name'
        type='text'
        onChange={(e) => { setName(e.target.value) }}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Name style={{
                        marginRight: '1rem',
                        width: '2rem',
                        height: '2rem'
                    }} />
                </InputAdornment>
            ),
        }}
    />)

    const Email = (< TextField

        placeholder='Email'
        type='email'
        onChange={(e) => { setEmail(e.target.value) }}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Name style={{
                        marginRight: '1rem',
                        width: '2rem',
                        height: '2rem'
                    }} />
                </InputAdornment>
            ),
        }}
    />)

    const Number = (< TextField

        placeholder='Phone no.'
        type='tel'
        inputProps={{
            maxLength: 10,
        }}
        onChange={(e) => { setNumber(e.target.value) }}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Name style={{
                        marginRight: '1rem',
                        width: '2rem',
                        height: '2rem'
                    }} />
                </InputAdornment>
            ),
        }}
    />)


    const LinkedInLink = (< TextField

        placeholder='LinkedIn Link'
        onChange={(e) => { setLinkedInLink(e.target.value) }}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Name style={{
                        marginRight: '1rem',
                        width: '2rem',
                        height: '2rem'
                    }} />
                </InputAdornment>
            ),
        }}
    />)


    const Country = (< TextField

        placeholder='Country'
        type='text'


        onChange={(e) => { setCountry(e.target.value) }}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Name style={{
                        marginRight: '1rem',
                        width: '2rem',
                        height: '2rem'
                    }} />
                </InputAdornment>
            ),
        }}
    />)


    const State = (< TextField

        placeholder='State'
        type='text'


        onChange={(e) => { setState(e.target.value) }}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Name style={{
                        marginRight: '1rem',
                        width: '2rem',
                        height: '2rem'
                    }} />
                </InputAdornment>
            ),
        }}
    />)


    const City = (<TextField

        placeholder='City'
        type='text'


        onChange={(e) => { setCity(e.target.value) }}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Name style={{
                        marginRight: '1rem',
                        width: '2rem',
                        height: '2rem'
                    }} />
                </InputAdornment>
            ),
        }}
    />)


    const Pincode = (<TextField

        placeholder='Pincode'
        type='pincode'
        inputProps={{
            maxLength: 6,
        }}

        onChange={(e) => { setPincode(e.target.value) }}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Name style={{
                        marginRight: '1rem',
                        width: '2rem',
                        height: '2rem'
                    }} />
                </InputAdornment>
            ),
        }}
    />)














}

export default TextFields