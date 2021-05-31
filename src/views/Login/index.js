import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonAppBar from '../../components/Header'

import {login} from '../../services';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    // maxHeight: 440,
    height: '100%'
  },
  dataTable: {
    padding : 24
  }
});

function Login() {
  const styles = useStyles()
  const history = useHistory()
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    const email = event.target[0].value
    const password = event.target[1].value
    login(email, password)
    .then((res) => {
        console.log(res)
        if (res.statusText === "OK") {
            localStorage.setItem("sessionToken", JSON.stringify(res.data.tokens.access.token))
            localStorage.setItem("userName", JSON.stringify(res.data.user.name))
            history.push("/")
        } 
    })
    .catch((res) => {
        console.log(res)
    })
  } 

  return (
    <div className={styles.root}>
    <ButtonAppBar />
    <form onSubmit={onSubmit} className={styles.form}>
        <TextField id="email" label="Email" />
        <TextField id="password" label="Password" />
        <Button color="primary" variant="contained" type="submit" >Submit</Button>
    </form>
    </div>
  );
}

export default Login;