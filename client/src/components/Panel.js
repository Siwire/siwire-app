import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import StartWindow from './StartWindow';
import FailWindow from './FailWindow';
import AccountWindow from './AccountWindow';
import LoadingWindow from './LoadingWindow';

export default function Panel({ appStore, appAction }) {

    const windowCheck = () => {
        if (appStore.isLoading) {
            return <LoadingWindow />
        }
        else {
            if (Object.keys(appStore.user).length === 0) {
                return <StartWindow />
            }
            else if (appStore.user.login) {
                return <AccountWindow appStore={appStore} appActions={appAction} />
            }
            else if (appStore.user.user === "notfound") {
                return <FailWindow />
            }
        }
    }

    const panelStyles = useStyles();

    return <Grid className={panelStyles.root} item xs={12}>
        {windowCheck()}
    </Grid>
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "90%",
        backgroundColor: "#F9F9F9",
    }
}))