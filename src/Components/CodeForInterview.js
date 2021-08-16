import { Box, Typography, makeStyles } from '@material-ui/core';
import Youtube from '../Assets/Images/youtube.png';
import InstaTele from '../Assets/Images/InstaTele.jpeg';
import Team from '../Assets/Images/team.jpg'
import Kohli from '../Assets/Images/Kohli.jpg'
import Dhoni from '../Assets/Images/dhoni.webp'
import { width } from '@material-ui/system';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
    },
})

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">Indian Cricket Team</Typography>
            <Box style={{display: 'flex'}}>
                <img src={Dhoni} className={classes.image} />
                <img src={Team} className={classes.image} />
            </Box>
        </Box>
    )
}

export default CodeForInterview;
