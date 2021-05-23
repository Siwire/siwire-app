import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Header from './Header'
import Panel from './Panel';

export default function Main() {

    const mainStyles = useStyles()
    return <Grid className={mainStyles.root}>
        <Header />
        <Panel />
    </Grid>
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
    }
}))