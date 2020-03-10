import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { Button,Card } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItemsDrawer from './ListItemsDrawer';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width:'100%',
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
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        justifyContent:'center'
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

export default function BuildDetails(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [show, setShow] = React.useState(false);
    const [project, setProject] = React.useState([]);
   
    const [currentPage,setCurrentPage] = React.useState(1);
   
    const [projectName, setProjectName] = React.useState(false);
    const [postPerPage , setPostPerPage ] = React.useState(3);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const indexOfLastPage=currentPage * postPerPage;
    console.log(indexOfLastPage)
    const indexOfFirstPage= indexOfLastPage - postPerPage; 
    console.log(indexOfFirstPage)
    console.log(project.length)
   const currentPosts = project.slice(indexOfFirstPage,indexOfLastPage)
    const handleGetProjectName = (getProjectName) => {
        setProjectName(getProjectName);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight,classes.login);
    const handleDeshboard = () => {
        props.history.push("/Dashboard");
        console.log("MyDashboard");
    };
    const handleAllProduct = () => {

        console.log("GetAllProducts");
        props.history.push("/GetAllProductsComponent");
    }
    const handleAdmin = () => {
        props.history.push("/Admin");
      }
      const handleLogout = () => {
        props.history.push("/");
      }
    const handleAboutUs = () => {

        console.log("AboutComponent");

        props.history.push("/AboutUsComponent");
    }
    const handleTrigger = () => {
        props.history.push("/TriggerComponent");
    }
    const handle = (getProject) => {
        setProject(getProject)
        console.log(getProject);

    }
    const handleApprove = (id) => {
          console.log("dataaaaa");
      
          // console.log(BranchId);
        //   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            // targetUrl = 'http://' + ip + ':8000/api/v1/workflow/build/approve/'+props.location.state.VersionId; 
            
        //   fetch(proxyUrl + targetUrl)
        //     .then(blob => blob.json())
        //     .then(data => {
        //       console.table(data);
        //     })
        //     .catch(e => { console.log(e); });
        //     props.history.push({pathname:"/BuildDetails",state:{producId:id}
        // });
       
          alert(" Approved Successfully..")
      
        }
        const handleReject = (id) => {
         
        //   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        //     targetUrl = 'http://' + ip + ':8000/api/v1/workflow/build/reject/'+props.location.state.VersionId; ;
           
        //   fetch(proxyUrl + targetUrl)
        //     .then(blob => blob.json())
        //     .then(data => {
        //       console.table(data);
        //     })
        //     .catch(e => { console.log(e); });
        //     props.history.push({pathname:"/BuildDetails",state:{producId:id}
        // });
        //      alert("Reject Updated!");
        }
       
       
      
    // useEffect(() => {


    //     async function fetchData(product_id) {
    //         handleGetProjectName(product_id);
    //         var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    //         targetUrl = 'http://' + ip + ':8000/api/v1/workflow/property/'+props.location.state.VersionId;
    //         console.log("data");
    //         const res = await fetch(proxyUrl + targetUrl)
    //             .then(blob => blob.json())
    //             .then(data => {
    //                 console.table(data);
    //                 handle(data);
    //                 return data;
    //             })
    //             .catch(e => {
    //             });
    //         console.log(res);

    //         console.log(project);

    //     }
    //     fetchData();
    // }, []);
    
    return (
        <div className={classes.root}>
            {/* {console.log(props)
            }
            {console.log(props.location.state.VersionId)
            }
            <CssBaseline /> */}
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
                    Logout={handleLogout} />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                <Grid direction="row" justify="left" alignItems="left">
                <Card className="View1">
                        <div>
                            <div style={{  fontSize: 'large'  }}><center>
                               <h2><u> <b>Build Details</b></u></h2></center></div>
                           
                        </div>
                        < span style={{  fontSize: 'large', textAlign:'left', fontfamily: 'Roboto', fontsize: '2rem'}}/>
                        {/* {project.map(value => ( */}
                     <div style={{paddingLeft:'2px', marginLeft:'22%' }}>
                      &nbsp;  < >Product:</>
                      < >Build:</>
                        {/* {value.properties_dict.version_number} */}
                        <h3>Branch:</h3>
                        <h3>Date & Time:</h3>
                     </div>
                     {/* ))} */}
                </Card>&nbsp;<div style={{ fontSize: 'large', textAlign: 'center' }} >
                    <Button variant="contained" color="primary" onClick={() => handleApprove()}>Approve</Button>
           &nbsp; <Button variant="contained" color="Secondary" onClick={() => handleReject()}>Reject</Button>
           </div>
           </Grid>
                </Container></main>
        </div>

    );
}