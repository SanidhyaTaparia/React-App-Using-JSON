import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Services/api';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValue={
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () => {
    const [user,setUser]=useState(initialValue)
    const {name,username,email,phone}=user
    const classes = useStyles();
    const history=useHistory()


    const onValueChange=(e)=>{
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }

    const addUserDetails=async()=>{
        console.log("Button running")
        await addUser(user)
        history.push('./all');
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={()=>addUserDetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser
