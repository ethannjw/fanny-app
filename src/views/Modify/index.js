import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

// components
import ButtonAppBar from '../../components/Header'
import DataTable from '../../components/MuiDataTable'

const useStyles = makeStyles({
  root: {
    width: '100%',
    '& .MuiTextField-root': {
        margin: 12
    },
    '& .MuiButton-root': {
        marginTop: 12,
        marginBottom: 12
    }
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
    flexDirection: 'row',
    spacing: 12
  },

});

function App() {
  const styles = useStyles()
  const categories = [
      {value: 'personal', label: 'Personal'},
      {value: 'e10', label: 'e10'},
  ]

  const handleRowClick = (rowItems) => {
    rowItems.forEach(element => {
        
        alert("clicked: " + JSON.stringify(element))
    });
  }

  return (
    <div className={styles.root}>
      <ButtonAppBar />
      <Typography variant="h4" className={styles.title}>Modify Entry</Typography>

      <div className={styles.dataTable}>
        <DataTable title={"Existing Items"} handleRowClick={handleRowClick}/>
      </div>

      <form className={styles.form}>
        <TextField id="platform" label="Platform" />
        <TextField id="id" label="LoginID" />
        <TextField id="password" label="Password" />
        <Button color="primary" variant="contained" type="submit" >Submit</Button>
      </form>
      
    </div>
  );
}

export default App;