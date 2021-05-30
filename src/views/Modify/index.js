import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';

// components
import ButtonAppBar from '../../components/Header'
import DataTable from '../../components/MuiDataTable'
import ModifyForm from '../../components/ModifyForm'

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

function Modify() {
  const styles = useStyles()
  const [selectedClue, setSelectedClue] = useState({})
  const [rightDrawer, setRightDrawer] = useState(false)

  const toggleDrawer = (toggle) => {
    setRightDrawer(toggle)
  }

  const categories = [
      {value: 'personal', label: 'Personal'},
      {value: 'e10', label: 'e10'},
  ]

  const handleRowClick = (rowItems) => {
    setSelectedClue({
      category : rowItems[0],
      clueId : rowItems[1],
      platform : rowItems[2],
      loginId : rowItems[3],
      clue : rowItems[4],
    })
    toggleDrawer(true)
  }

  return (
    <div className={styles.root}>
      <ButtonAppBar />
      <SwipeableDrawer 
            open={rightDrawer}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer(true)}
        >
            <ModifyForm data={selectedClue} setRightDrawer={setRightDrawer}/>
        </SwipeableDrawer>

      <Typography variant="h4" className={styles.title}>Modify Entry</Typography>

      <div className={styles.dataTable}>
        <DataTable title={"Existing Items"} handleRowClick={handleRowClick}/>
      </div>

    </div>
  );
}

export default Modify;