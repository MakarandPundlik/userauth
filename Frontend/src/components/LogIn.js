import React,{useState} from 'react';
import { makeStyles,createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router';
import {handleLogin} from '../services/userservice';
import axios from 'axios';


const styles = {
	button: {
		margin: 15,
		color: '#AC3B61',
		background: '#ffffff',
		fontWeight: 'bold',
    },
	floatingLabelFocusStyle: {
		color: "#F9A257"
	},
};

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#EDF5E1'
		},
		secondary: {
			main: '#EDF5E1'
		},
	}
})

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'center',

	},

	control: {
		padding: theme.spacing(2),
		width: theme.spacing(50),
		height: theme.spacing(50),
		marginTop: theme.spacing(5),
		background: '#AC3B61',
		color: '#ffffff	',
		height: 200,
		borderRadius:"8%"
	},
	errors:{
		color:'#ffffff'
	},
}));

const LogIn = (props) => {


	const classes = useStyles();
	
	const [state, setState] = useState({
		email:" ",
		password:" "
	});
	
	const [errors,setErrors]=useState();
	
	const handleChange = (e) =>{
		
		
		setState({
			...state,[e.target.id]:e.target.value
		});
		
	}
	const handleSubmit=(e)=>{
		e.preventDefault();
		let profile={}
		profile.email = state.email;
		profile.password = state.password;
		
		
		handleLogin(profile);
		
	}
		
	if(localStorage.getItem('token'))
	return(<Redirect to='/dashboard'/>)	
    return ( 
        <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
	  <form onSubmit={handleSubmit} autoComplete="off">
      <Paper variant="outlined" className={classes.control}  elevation={15}>
      {/* <Typography variant="h4" gutterBottom>
		  Log-In
	  </Typography> */}
      
       <TextField id="email" label="Email" variant="standard" type="email"
		   onChange={handleChange}
		   required={true}
	   />
	   {/* <div className={classes.errors}>{error}</div> */}
		<br/><br/>
        <TextField id="password" label="Password" variant="standard" type="password"
			 onChange={handleChange}
			 required={true}
		/>
		<br/><br/>
        
		<Button 
		onClick={handleSubmit}
		style={styles.button}>Submit</Button>
      </Paper>
	  </form>
     </MuiThemeProvider>
      
    </div>
     );
}
 
export default LogIn;