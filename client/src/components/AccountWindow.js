import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import UserInfo from './UserInfo';


export default function AccountWindow() {

    const mainStyles = useStyles()
    return <Grid item xs={12}>
        <UserInfo/>
        {/* <RepositoriesInfo/> */}
    </Grid>
}

const useStyles = makeStyles((theme) => ({
   
}))