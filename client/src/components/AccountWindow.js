import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import UserInfo from './UserInfo';
import RepositoriesInfo from './RepositoriesInfo'


export default function AccountWindow() {

    const accountStyles = useStyles()
    return <Grid item xs={12} container direction="row">
        <UserInfo/>
        <RepositoriesInfo/>
    </Grid>
}

const useStyles = makeStyles((theme) => ({
   
}))