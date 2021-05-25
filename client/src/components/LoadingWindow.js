import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import UserInfo from './UserInfo';
import RepositoriesInfo from './RepositoriesInfo'
import styled, { keyframes, css, } from "styled-components";

export default function LoadingWindow() {

    function Loader() {
        const rotate360 = keyframes`
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
        `;
        const Spinner = styled.div`
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;

        animation: ${rotate360} 1s linear infinite;
        transform: translateZ(0);
        `;
        return <Spinner />
    }

    const accountStyles = useStyles()

    return <Grid className={accountStyles.root} item xs={12} container direction="row" justify="center" alignItems="center">
        {Loader()}
    </Grid>
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%"
    }
}))