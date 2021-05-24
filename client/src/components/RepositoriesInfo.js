import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import EmptyRepositories from './EmptyRepositories'
import ListRepositories from './ListRepositories'

export default function RepositoriesInfo({ repositories }) {

    const ckeckRepositories = () => {
        if (repositories.length) {
            return <ListRepositories repositories={repositories}/>
        }
        else {
            return <EmptyRepositories />
        }
    }

    const repositoriesInfo = useStyles()
    return <Grid item xs={8}>
        {ckeckRepositories()}
    </Grid>
}

const useStyles = makeStyles((theme) => ({

}))