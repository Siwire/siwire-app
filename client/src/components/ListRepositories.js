import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ItemRepositories from './ItemRepositories';
import ReactPaginate from 'react-paginate';

export default function ListRepositories({ repositories, repositoriesPerPage, currentPage, countPage, username, repAcions }) {

    const { loadRepositoriesFromServer } = repAcions

    const handlePageClick = (data) => {
        const selected = data.selected;
        loadRepositoriesFromServer(selected, username);
    };

    const checkViewItemRep = () => {
        const arrayOfViewItems = { itemsIndex: [] }
        repositoriesPerPage.forEach(element => {
            arrayOfViewItems.itemsIndex.push(repositories.findIndex(rep => rep.id === element.id) + 1)
        });
        const string = `${arrayOfViewItems.itemsIndex[0]} - ${arrayOfViewItems.itemsIndex[arrayOfViewItems.itemsIndex.length - 1]} `

        return string;
    }

    const listRepositoriesInfo = useStyles()

    return <Grid className={listRepositoriesInfo.root} item xs={12} container justify="center" alignItems="flex-start">
        <Grid item sm={12} md={11} container justify="flex-start">
            <Typography className={listRepositoriesInfo.text}>
                Repositories ({repositories.length})
            </Typography>
            {repositoriesPerPage && repositoriesPerPage.map((repository, index) => {
                return <ItemRepositories key={index} repository={repository} />
            })}
        </Grid>
        <Grid item xs={11} sm={11} container direction="row" justify="flex-end">
            <Grid container alignItems="center" justify="flex-end" item  xs={12} sm={5}  lg={7} >
                <Typography className={listRepositoriesInfo.count_item_text}>
                    {`${checkViewItemRep()} of ${repositories.length} items`}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={7}  lg={5} container justify="center" >
                <ReactPaginate
                    previousLabel={<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.41436 6.00008L7.70726 1.70718L6.29304 0.292969L0.585938 6.00008L6.29304 11.7072L7.70726 10.293L3.41436 6.00008Z" fill={currentPage === 0 ? "grey" : "#0064EB"} />
                    </svg>}
                    nextLabel={<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path fillRule="evenodd" clipRule="evenodd" d="M1 1L6 6L1 11" fill={currentPage === countPage ? "#0064EB" : "grey"} />
                    </svg>}
                    breakLabel={'...'}
                    breakClassName={listRepositoriesInfo.break}
                    activeClassName={listRepositoriesInfo.active_page}
                    activeLinkClassName={listRepositoriesInfo.active}
                    pageCount={countPage}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    initialPage={0}
                    previousClassName={listRepositoriesInfo.previous}
                    nextClassName={listRepositoriesInfo.next}
                    pageClassName={listRepositoriesInfo.page}
                />
            </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
    </Grid>
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        padding: "28px 28px 0 0",
    },
    page: {
        fontFamily: "Inter",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "21px",
        letterSpacing: "0em",
        textAlign: "left",
        color: "#808080",
        listStyle: "none",
        display: "inline",
        paddingLeft: "16px",
    },
    previous: {
        listStyle: "none",
        display: "inline",
        paddingLeft: "16px",
        color: "#808080",
    },
    next: {
        listStyle: "none",
        display: "inline",
        paddingLeft: "16px",
    },
    break: {
        listStyle: "none",
        display: "inline",
        paddingLeft: "16px",
    },
    active_page: {
        backgroungColor: "#0064EB",
    },
    active: {
        backgroundColor: "#0064EB",
        alignItems: "center",
        color: "#FFFFFF",
        // color: "red",
        // height: "25px",
        // width: "21px",
        // left: "190px",
        // top: "0px",
        borderRadius: "3px",
        padding: "2px 6px 2px 6px",

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
    count_item_text: {
        fontFamily: "Inter",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "21px",
        letterSpacing: "0em",
        textAlign: "left",
        color: "#808080",
    },
}))