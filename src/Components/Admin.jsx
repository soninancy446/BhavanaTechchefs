import React, { useEffect } from 'react';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Reactpagination from './Reactpagination'
import {  Dialog, DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { fade, makeStyles } from '@material-ui/core/styles';
import GetAppOutlined from '@material-ui/icons/GetAppOutlined';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItemsDrawer from './ListItemsDrawer';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',

    },
    container: {
        maxHeight: 440,
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    contentadmin: {
        
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {

        height: 240,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    tableColumnWidth: {
        // table-layout: auto,
        tableLayout: 'auto',
        width: '150px',
        fontWeight: '600',
        fontSize: '18px'
    },
    tableDataWidth: {

        width: '150px',

    },
    paperadminTable: {
        width: '100%',
    },
    newtableColumnWidth :{
        width : '250px'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));
export default function Admin(props) {
    const classes = useStyles();
    const [pm, setPm] = React.useState([])
    const [click,setClick] =React.useState(false)
    const [project, setProject] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postPerPage, setPostPerPage] = React.useState(3);

    let data = {
        "users": [
            {
                name: "Windows ",
                role: "Pm",
                emailId: "abc@gmail.com",
                product: "calender",
                id : "1"
            },
            {
                name: "Windows ",
                role: "Pm",
                emailId: "abc@gmail.com",
                product: "calender",
                id: "2"
            },
            {
                name: "Windows ",
                role: "Pm",
                emailId: "abc@gmail.com",
                product: "calender",
                id: "3"
            },
            {
                name: "Windows ",
                role: "Pm",
                emailId: "abc@gmail.com",
                product: "calender",
                id:"4"
            },
            {
                name: "Windows ",
                role: "Pm",
                emailId: "abc@gmail.com",
                product: "calender",
                id : "5"
            },
            {
                name: "Windows ",
                role: "Pm",
                emailId: "abc@gmail.com",
                product: "calender",
                id : "6"
            },
            {
                name: "Windows ",
                role: "Pm",
                emailId: "abc@gmail.com",
                product: "calender",
                id : "7"
            },
        ]
    }
  
    useEffect(() => {
        setPm(data.users);
        setProject(data.users)

    },[])
   // const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [productDialog, setProductDialog] = React.useState(false);
  const userRegistationPage =()=>{
    props.history.push('/Registration')
}
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const handleDeshboard = () => {
    props.history.push("/Dashboard");
    console.log("MyDashboard");
  };
  const handleAllProduct = () => {

    console.log("GetAllProducts");
props.history.push("/GetAllProductsComponent");
  }
  const paginate = (pageNumber) => {
    console.log("pagenumber",pageNumber)  
    setCurrentPage(pageNumber)}

  const handleAboutUs=()=>{

    console.log("AboutComponent");

    props.history.push("/AboutUsComponent");
  }
  const showProducts=(id)=>{
    setProductDialog(true)

    //api call

  }
  const handleAdmin=()=>{
    props.history.push("/Admin");
  }
  const handleLogout=()=>{
    props.history.push("/");
  }

  const closeDialogBox =()=>{
    setProductDialog(false)
  }
  const indexOfLastPage = currentPage * postPerPage;
    console.log(indexOfLastPage)
    const indexOfFirstPage = indexOfLastPage - postPerPage;
    console.log(indexOfFirstPage)
    console.log(project.length)
    const pagenumber =  Math.ceil(project.length / postPerPage)
    const currentPosts = project.slice(indexOfFirstPage, indexOfLastPage)
    return (
        <div  className={classes.root}>
 <CssBaseline />
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
         Manage Your Project
        </Typography>
        
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
     <ListItemsDrawer 
       Dashboard={handleDeshboard}
       AllProduct={handleAllProduct}
       AboutUs={handleAboutUs}
       Admin={handleAdmin}
       Logout={handleLogout}     />
     
    </Drawer>
   <main className={classes.contentadmin}>
      <div className={classes.appBarSpacer} style={{ marginright: '200px',
    width: 'max-content',
    margintop: '80px'}} />
      <Container maxWidth="lg" className={classes.container}>
      <Grid item xs={13} md={3} lg={4}>
          </Grid></Container></main>
    


          <Dialog open={productDialog}>
                                <DialogTitle>
                                    Trigger Builds
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
                                    <CloseIcon onClick={() => { closeDialogBox() }} style={{ height:'200%',cursor: 'pointer'  }} />
                               
                                </DialogTitle>
                               
                                <DialogContent >
                                    <Divider />
                                    <div>                                    product 1
                                    product 2
                                    </div>
                                    <div>
                                        product 3 product 4

                                    </div>

                                </DialogContent>
                            </Dialog>




            <div className="Admin-table">
            <Paper className={classes.roottable}>
            
                    <TableContainer className={classes.container}>
              
                                <AddCircleOutline variant="contained" color="primary"  style={{ width : '80px',cursor:'pointer'}} onClick={()=>{userRegistationPage()}}></AddCircleOutline>
                        <Table ><div>
                            <TableHead className={classes.Tableheading}>
                                <div>
                                    <TableRow >
                                        <TableCell className={classes.newtableColumnWidth} >Username</TableCell>
                                        <TableCell className={classes.newtableColumnWidth}>Role</TableCell>
                                        <TableCell className={classes.newtableColumnWidth}>Email</TableCell>
                                        <TableCell className={classes.newtableColumnWidth}>Product</TableCell>
                                    </TableRow>
                                </div>
                            </TableHead>
                            <TableBody >
                                {currentPosts.map(value => (
                                    <TableRow class="table-row">
                                        <div hover style={{ cursor: 'pointer' }}>
                                            <TableCell className={classes.newtableColumnWidth}>{value.name}</TableCell>
                                            <TableCell className={classes.newtableColumnWidth}>{value.role}</TableCell>
                                            <TableCell className={classes.newtableColumnWidth}>{value.emailId}</TableCell>
                                            <TableCell className={classes.newtableColumnWidth}> <Button variant="primary" justifyContent='flex-end' variant="contained" onClick={()=>{
                                                showProducts(value.id)
                                            }}>View Products</Button></TableCell>
                                        </div>
                                    </TableRow>
                                ))}
                                
                            </TableBody>
                        </div> </Table>
                        <Reactpagination postsPerPage={postPerPage} totalPosts={project.length} paginate={paginate} />
                        {/* <Pagination count={pagenumber} size="small" onClick={() => paginate(pagenumber)} /> */}
                    </TableContainer>
                   
                </Paper>
                
            </div>
        </div>
    )
}