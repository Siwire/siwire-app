import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Header from './Header'
import Panel from './Panel';

export default function Main({appActions, appStore}) {

    const mainStyles = useStyles()
    return <Grid className={mainStyles.root}>
        <Header appAction={appActions} appStore={appStore}/>
        <Panel appStore={appStore} appAction={appActions}/>
    </Grid>
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        backgroundColor: "#F9F9F9",
    }
}))