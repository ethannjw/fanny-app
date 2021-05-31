import React, {useState, useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';

// components
import ButtonAppBar from '../../components/Header'
import DataTable from '../../components/MuiDataTable'
import ModifyForm from '../../components/ModifyForm'

// services
import {getClues} from "../../services"

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

function AllClues() {
  const styles = useStyles()
  const [selectedClue, setSelectedClue] = useState({})
  const [rightDrawer, setRightDrawer] = useState(false)
  const [allClues, setAllClues] = useState([])

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

  const callGetClues = () => {
    getClues()
    .then((res) => {
        console.log(res)
        if (res.statusText === "OK") {
          setAllClues(res.data.results)
        } 
    })
    .catch((res) => {
        console.log(res)
    })
  }

  useEffect(() => {
    callGetClues() 
  }, [])

  return (
    <div className={styles.root}>
      <ButtonAppBar />
      <SwipeableDrawer 
            anchor="right"
            open={rightDrawer}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer(true)}
        >
            <ModifyForm data={selectedClue} setRightDrawer={setRightDrawer} getClues={callGetClues}/>
        </SwipeableDrawer>

      <Typography variant="h4" className={styles.title}>All Clues</Typography>

      <div className={styles.dataTable}>
        <DataTable title={"All Items"} data={allClues} handleRowClick={handleRowClick}/>
      </div>

    </div>
  );
}

export default AllClues;