import { ElevenMp, Token } from '@mui/icons-material';
import { Button, Input } from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import './SignInPage.css'
import { preconnect } from 'react-dom';
import { useNavigate } from 'react-router-dom';

type Props = {}

type formData = {
    name: string,
    pass: string
}

const SignInPage = (props: Props) => {
    const navigate = useNavigate()
    const [form, setForm] = useState({ name: '', pass: '' });


    function handleSave(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(form)
     
        localStorage.setItem("token", "21332412")
        localStorage.setItem("role","user")
        navigate('/home')

    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const name = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [name]: value })
    }

    return (
        <div className='container'>
            <h1 >Form</h1>
            <form className='form' onSubmit={handleSave}>
                <Input placeholder='Name' required name='name' value={form.name} onChange={handleChange} />
                <Input placeholder='Pass' required name='pass' value={form.pass} onChange={handleChange} />
                <Button type='submit'>save</Button>
            </form>
        </div>
    )
}


export default SignInPage;