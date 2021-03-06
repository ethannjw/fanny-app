
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonAppBar from '../../components/Header'
import DataTable from '../../components/MuiDataTable'

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

function App() {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <ButtonAppBar />
      <div className={styles.dataTable}>
        <Typography variant="h4">Welcome to Fanny</Typography>
      </div>
      
    </div>
  );
}

export default App;