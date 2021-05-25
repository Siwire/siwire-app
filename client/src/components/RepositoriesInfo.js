import Grid from '@material-ui/core/Grid';
import EmptyRepositories from './EmptyRepositories';
import ListRepositories from './ListRepositories';

export default function RepositoriesInfo({ repositories, repositoriesPerPage, countPage, currentPage, username, appAction }) {

    const ckeckRepositories = () => {
        if (repositories.length) {
            return <ListRepositories repositories={repositories} repositoriesPerPage={repositoriesPerPage} countPage={countPage} currentPage={currentPage} username={username} repAcions={appAction} />
        }
        else {
            return <EmptyRepositories />
        }
    }

    return <Grid item xs={12} md={8}>
        {ckeckRepositories()}
    </Grid>
}