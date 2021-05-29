import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from '../../components/Header'


const useStyles = makeStyles({
  root: {
    width: '100%',
    '& .MuiTextField-root': {
        marginTop: 12,
        marginBottom: 12
    },
    '& .MuiButton-root': {
        marginTop: 12,
        marginBottom: 12
    }
  },
  title: {
    marginBottom: 24
  },
  form: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    padding : 24,
    maxWidth: 400,
    spacing: 12
  }
});

function App() {
  const styles = useStyles()
  const categories = [
      {value: 'personal', label: 'Personal'},
      {value: 'e10', label: 'e10'},
  ]
  return (
    <div className={styles.root}>
      <ButtonAppBar />
      <form className={styles.form}>
      <Typography variant="h4" className={styles.title}>New Entry</Typography>
        <TextField select id="category" label="Category">
            {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
          ))}
        </TextField>
        <TextField id="platform" label="Platform" />
        <TextField id="id" label="LoginID" />
        <TextField id="password" label="Password" />
        <Button color="primary" variant="contained" type="submit" >Submit</Button>
      </form>
      
    </div>
  );
}

export default App;