import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// services
import { modifyClue, deleteClue } from '../../services'

const useStyles = makeStyles({
    root: {
      width: '100%',

    },
    title: {
      margin: 24,
      marginBottom: 24
    },
    dataTable: {
      padding : 24
    },
    form: {
      margin: 24,
      display: 'flex',
      flexDirection: 'column',
      spacing: 12,
      '& .MuiTextField-root': {
        margin: 12
    },
    '& .MuiButton-root': {
        marginTop: 12,
        marginBottom: 12
    }
    },
  
  });

export default function ModifyForm(props) {
  const {data, setRightDrawer} = props
  const styles = useStyles()

  const handleDelete = () => {
    // should have a confirmation dialog
    console.log("deleting : " , data)
    deleteClue(data.clueId)
    .then((res) => {
      console.log(res)
      if(res.status === 204) {
        alert(data.loginId + " is deleted")
        setRightDrawer(false)
      }
    })
    .catch((res) => {
      console.log(res)
      alert("Problem deleting item")
    })
  }
  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(event)
    modifyClue(data.clueId, {
      platform: event.target[0].value,
      loginId: event.target[1].value,
      clue: event.target[2].value,
    })
    .then((res) => {
      if(res.statusText === "OK") {
        setRightDrawer(false)
      }
    })
    .catch((res) => {
      console.log(res)
      alert("Problem modifying item")
    })
  }

  return  <form className={styles.form} onSubmit={onSubmitForm}>
        <TextField id="platform" label="Platform" defaultValue={data.platform}/>
        <TextField id="id" label="LoginID" defaultValue={data.loginId} />
        <TextField id="clue" label="Clue" defaultValue={data.clue}/>
        <Button color="primary" variant="contained" type="submit" >Submit</Button>
        <Button color="secondary" variant="contained" onClick={handleDelete}>Delete</Button>
    </form>

} 