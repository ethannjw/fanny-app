import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from '../../components/Header'

// services
import {createClue} from "../../services"

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

function AddNew() {
  const styles = useStyles()
  const history = useHistory()
  const categories = [
      {value: 'personal', label: 'Personal'},
      {value: 'e10', label: 'e10'},
  ]

  const onSubmitForm = ( event ) => {
    event.preventDefault()
    const category = event.target[0].value
    const platform = event.target[1].value
    const loginId = event.target[2].value
    const clue = event.target[3].value

    createClue({category, platform, loginId, clue})
    .then((res) => {
      console.log(res)
      if (res.statusText === "Created") {
        history.push('/')
      }
    })
    .catch((res) => {
      console.log(res)
    })
  }

  return (
    <div className={styles.root}>
      <ButtonAppBar />
      <form className={styles.form} onSubmit={onSubmitForm}>
      <Typography variant="h4" className={styles.title}>New Entry</Typography>
        <TextField select id="category" label="Category">
            {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
          ))}
        </TextField>
        <TextField id="platform" label="Platform" />
        <TextField id="loginId" label="LoginID" />
        <TextField id="clue" label="Clue" />
        <Button color="primary" variant="contained" type="submit" >Submit</Button>
      </form>
      
    </div>
  );
}

export default AddNew;