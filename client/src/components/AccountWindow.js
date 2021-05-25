import Grid from '@material-ui/core/Grid';
import UserInfo from './UserInfo';
import RepositoriesInfo from './RepositoriesInfo'


export default function AccountWindow({ appStore, appActions }) {

    return <Grid item xs={12} container direction="row">
        <UserInfo user={appStore.user} />
        <RepositoriesInfo repositories={appStore.repositories} repositoriesPerPage={appStore.repositoriesPerPage} currentPage={appStore.currentPage} countPage={appStore.countPage}  username={appStore.username} appAction={appActions} />
    </Grid>
}