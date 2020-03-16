// import React, { useEffect } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Pagination from './Pagination'
// import TableContainer from '@material-ui/core/TableContainer';
// import clsx from 'clsx';
// import Drawer from '@material-ui/core/Drawer';
// import Container from '@material-ui/core/Container';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import ListItemsDrawer from './ListItemsDrawer';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         width: '100%',
//     },
//     container: {
//         maxHeight: 440,
//     },
//     toolbar: {
//         paddingRight: 24, // keep right padding when drawer closed
//     },
//     toolbarIcon: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         padding: '0 8px',
//         ...theme.mixins.toolbar,
//     },
//     appBar: {
//         zIndex: theme.zIndex.drawer + 1,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: 36,
//     },
//     menuButtonHidden: {
//         display: 'none',
//     },
//     title: {
//         flexGrow: 1,
//     },
//     drawerPaper: {
//         position: 'relative',
//         whiteSpace: 'nowrap',
//         width: drawerWidth,
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     drawerPaperClose: {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//             width: theme.spacing(9),
//         },
//     },
//     appBarSpacer: theme.mixins.toolbar,
//     content: {
//         flexGrow: 1,
//         height: '100vh',
//         overflow: 'auto',
//     },
//     container: {
//         paddingTop: theme.spacing(4),
//         paddingBottom: theme.spacing(4),
//     },
//     paper: {
//         padding: theme.spacing(2),
//         display: 'flex',
//         overflow: 'auto',
//         flexDirection: 'column',
//     },
//     fixedHeight: {

//         height: 240,
//     },
//     search: {
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: fade(theme.palette.common.white, 0.15),
//         '&:hover': {
//             backgroundColor: fade(theme.palette.common.white, 0.25),
//         },
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(1),
//             width: 'auto',
//         },
//     },
//     inputRoot: {
//         color: 'inherit',
//     },
//     tableColumnWidth: {
//         tableLayout: 'auto',
//         width: '170px',
//         fontWeight: 'bold',
//         fontSize: '20px'
//     },
//     tableDataWidth: {

//         width: '180px',
//     },

//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 7),
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             width: 120,
//             '&:focus': {
//                 width: 200,
//             },
//         },
//     },
// }));

// export default function GetAllProductsComponent(props) {
//     const ip = "13.127.18.137"
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(true);
//     const [BuildData, setBuildData] = React.useState([]);
//     //   const [project, setProject] = React.useState([]);
//     const [currentPage, setCurrentPage] = React.useState(1);
//     const [postPerPage, setPostPerPage] = React.useState(3);
//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };
//     const handleDrawerClose = () => {
//         setOpen(false);
//     };
//     const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
//     const handleDeshboard = () => {
//         props.history.push("/Dashboard");
//         console.log("MyDashboard");
//     };
//     const handleAllProduct = () => {

//         console.log("GetAllProducts");
//         props.history.push("/GetAllProductsComponent");
//     }
//     const handleAboutUs = () => {

//         console.log("AboutComponent");

//         props.history.push("/AboutUsComponent");
//     }
//     const handleApproveddata = (getBuild) => {
//         setBuildData(getBuild);
//     }
//     useEffect(() => {
//         async function fetchData() {
//             var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//                 targetUrl = 'http://' + ip + ':8000/api/v1/workflow/version/'
//             const res = await fetch(proxyUrl + targetUrl)
//             res
//                 .json()
//                 .then(res => setBuildData(res))

//         }
//         fetchData();
//     }, []);
//     //   console.log("hhiii",BuildData);
//     const paginate = (pageNumber) => setCurrentPage(pageNumber)
//     const indexOfLastPage = currentPage * postPerPage;
//     console.log(indexOfLastPage)
//     const indexOfFirstPage = indexOfLastPage - postPerPage;
//     console.log(indexOfFirstPage)
//     console.log(BuildData.length)
//     const currentPosts = BuildData.slice(indexOfFirstPage, indexOfLastPage)
//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
//                 <Toolbar className={classes.toolbar}>
//                     <IconButton
//                         edge="start"
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
//                         Recent Builds
//         </Typography>
//                     <IconButton color="inherit">
//                         <Badge badgeContent={0} color="secondary">
//                             <NotificationsIcon />
//                         </Badge>
//                     </IconButton>
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 variant="permanent"
//                 classes={{
//                     paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
//                 }}
//                 open={open}
//             >
//                 <div className={classes.toolbarIcon}>
//                     <IconButton onClick={handleDrawerClose}>
//                         <ChevronLeftIcon />
//                     </IconButton>
//                 </div>
//                 <Divider />
//                 <ListItemsDrawer
//                     Dashboard={handleDeshboard}
//                     AllProduct={handleAllProduct}
//                     AboutUs={handleAboutUs} />

//             </Drawer>
//             <main className={classes.content}>
//                 <div className={classes.appBarSpacer} />
//                 <Container maxWidth="lg" className={classes.container}>
//                     <Paper className={classes.root}>
//                         <TableContainer className={classes.container}>
//                             <Table ><div>
//                                 <TableHead >
//                                     <div  >
//                                         <TableRow >
//                                             <TableCell className={classes.tableColumnWidth}>Builds</TableCell>
//                                         </TableRow>
//                                     </div>
//                                 </TableHead>
//                                 <TableBody >
//                                     {currentPosts.map(value => (
//                                         <div >
//                                             <TableRow hover className={classes.tableRow} style={{ cursor: 'pointer' }}>


//                                                 <TableCell className={classes.tableDataWidth}>{value.version_name}</TableCell>

//                                             </TableRow>
//                                         </div>
//                                     ))}
//                                 </TableBody>
//                             </div> </Table>
//                             <Pagination postsPerPage={postPerPage} totalPosts={BuildData.length} paginate={paginate} />

//                         </TableContainer>

//                     </Paper>

//                 </Container></main>
//         </div>

//     );
// }