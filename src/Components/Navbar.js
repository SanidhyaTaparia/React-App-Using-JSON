import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const Navbar = () => {
    const classes = useStyle(); // Basically method to use css in Material UI
    return (
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>Indian Cricket Team</NavLink>
                <NavLink className={classes.tabs} to="/all" exact>All Players</NavLink>
                <NavLink className={classes.tabs} to="/add" exact>Add Player</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
