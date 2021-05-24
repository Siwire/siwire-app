import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function EmptyRepositories() {

    const itemRepositoriesInfo = useStyles()
    return <Grid className={itemRepositoriesInfo.root} item xs={12} container justify="flex-start" alignItems="center">
        <Grid item xs={12} container justify="flex-start" direction="column">
            <Typography className={itemRepositoriesInfo.name_rep_text}>
                react-hot-loader
            </Typography>
            <Typography className={itemRepositoriesInfo.content_rep_text}>
                Tweak React components in real time. (Deprecated: use Fast Refresh instead.
            </Typography>
        </Grid>

    </Grid>
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        padding: "24px 0px 24px 32px",
        marginTop: "24px",
        backgroundColor: "#FFFFFF"
    },
    name_rep_text: {
        fontFamily: "Inter",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "29px",
        letterSpacing: "0px",
        textAlign: "left",
        color: "#0064EB",
        paddingBottom: "16px",
    },
    content_rep_text: {
        fontFamily: "Inter",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "19px",
        letterSpacing: "0px",
        textAlign: "left",
        color: "#000000"
    }

}))