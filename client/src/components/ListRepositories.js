import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ItemRepositories from './ItemRepositories';

export default function ListRepositories() {

    const listRepositoriesInfo = useStyles()

    return <Grid className={listRepositoriesInfo.root} item xs={12} container justify="flex-start" alignItems="flex-start">
        <Grid item xs={11} container justify="flex-start">
            <Typography className={listRepositoriesInfo.text}>
                Repositories (249)
            </Typography>
            <ItemRepositories />
        </Grid>
        <Grid item xs={1}>
        </Grid>
    </Grid>
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        paddingTop: "28px",
    },
    text: {
        fontFamily: "Inter",
        fontSize: "32px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "42px",
        letterSpacing: "0px",
        textAlign: "left",

    },
}))