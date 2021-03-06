import { makeStyles, InputBase } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function Header({ appStore, appAction }) {

    const { setUsername, fetchGetUser } = appAction

    const setFieldValue = (event) => {
        event.preventDefault();
        setUsername(event.target.value)
    }
    const handleKeyPress = (event) => {

        if (appStore.username.trim().length && event.key === 'Enter' && !event.shiftKey) {
            handleClick(event);
        }
    }
    const handleClick = (event) => {
        event.preventDefault();
        fetchGetUser(event.target.value);
    }

    const headerStyle = useStyles()

    return <Grid container item xs={12} direction="row" alignItems="center" className={headerStyle.root}>
        <Grid item xs={3} sm={2} md={1} className={headerStyle.logo}>
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.5093 0C9.16808 0 0 9.16808 0 20.5093C0 29.5756 5.87436 37.2496 14.0238 39.966C15.0424 40.1698 15.416 39.5246 15.416 38.9813C15.416 38.5059 15.382 36.8761 15.382 35.1783C9.67742 36.4007 8.48897 32.7334 8.48897 32.7334C7.57216 30.3565 6.21392 29.7453 6.21392 29.7453C4.34635 28.489 6.34975 28.489 6.34975 28.489C8.42105 28.6248 9.50764 30.5942 9.50764 30.5942C11.3413 33.7182 14.2954 32.8353 15.4839 32.292C15.6537 30.9677 16.1969 30.0509 16.7742 29.5416C12.2241 29.0662 7.43633 27.3005 7.43633 19.4227C7.43633 17.1817 8.25127 15.348 9.5416 13.9219C9.33786 13.4126 8.62479 11.3073 9.74533 8.48896C9.74533 8.48896 11.4771 7.94567 15.382 10.5942C17.0119 10.1528 18.7776 9.91511 20.5093 9.91511C22.2411 9.91511 24.0068 10.1528 25.6367 10.5942C29.5416 7.94567 31.2733 8.48896 31.2733 8.48896C32.3939 11.3073 31.6808 13.4126 31.4771 13.9219C32.8014 15.348 33.5823 17.1817 33.5823 19.4227C33.5823 27.3005 28.7946 29.0323 24.2105 29.5416C24.9576 30.1868 25.6027 31.4092 25.6027 33.3446C25.6027 36.0951 25.5688 38.3022 25.5688 38.9813C25.5688 39.5246 25.9423 40.1698 26.961 39.966C35.1104 37.2496 40.9847 29.5756 40.9847 20.5093C41.0187 9.16808 31.8166 0 20.5093 0Z" fill="white" />
            </svg>
        </Grid>
        <Grid container item xs={7} sm={4} md={4}className={headerStyle.search} alignItems="center">
            <Grid item xs={1}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.23497 0C2.79706 0 0 2.79706 0 6.23497C0 9.67288 2.79706 12.4699 6.23497 12.4699C7.63766 12.4699 8.92987 11.9995 9.97123 11.216L12.4982 13.7422C12.6697 13.9138 12.8951 14 13.1202 14C13.3453 14 13.5707 13.9138 13.7422 13.7422C14.0862 13.3983 14.0862 12.8421 13.7422 12.4982L11.216 9.97123C11.9995 8.92987 12.4699 7.63766 12.4699 6.23497C12.4699 2.79706 9.67288 0 6.23497 0ZM1.75956 6.23497C1.75956 3.76687 3.76687 1.75956 6.23497 1.75956C8.70307 1.75956 10.7104 3.76687 10.7104 6.23497C10.7104 8.70307 8.70307 10.7104 6.23497 10.7104C3.76687 10.7104 1.75956 8.70307 1.75956 6.23497Z" fill="#808080" />
                </svg>
            </Grid>
            <Grid item xs={11} className={headerStyle.textField}>
                <InputBase
                    onChange={setFieldValue}
                    onKeyDown={handleKeyPress}
                    className={headerStyle.input}
                    placeholder="Enter GitHub username"
                    value={appStore.username}
                />
            </Grid>
        </Grid>
    </Grid>
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#0064EB",
        height: "10%",
    },
    logo: {
        paddingLeft: "41px"
    },
    search: {
        marginLeft: "21px",
        paddingLeft: "19px",
        borderRadius: "6px",
        backgroundColor: "#fff",
        height: "40px",
    },
    textField: {
        paddingLeft: "11px",
        color: "red"
    },
    input: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",
        display: "flex",
        letterSpacing: "0.01em",
        textAlign: "left",
        alignItems: "center",
        color: "#000000",
    }
}))