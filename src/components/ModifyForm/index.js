




export default function ModifyForm(props) {

    return <form className={styles.form}>
        <TextField id="platform" label="Platform" />
        <TextField id="id" label="LoginID" />
        <TextField id="password" label="Password" />
        <Button color="primary" variant="contained" type="submit" >Submit</Button>
    </form>
} 