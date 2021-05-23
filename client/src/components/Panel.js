import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import StartWindow from './StartWindow';
import FailWindow from './FailWindow';


export default function Panel() {

    const windowCheck = () => {
        // return <StartWindow/>
        return <FailWindow/>

    }

    const panelStyles = useStyles();

    return <Grid className={panelStyles.root} item xs={12}>
        {windowCheck() }
    </Grid>
}

const useStyles = makeStyles((theme)=> ({
    root: {
        height: "89%",
    }
}))