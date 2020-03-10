
import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Snackbar from '@material-ui/core/Snackbar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import CloseIcon from '@material-ui/icons/Close';
import { DialogContent,Dialog, DialogTitle, } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircleOutline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItemsDrawer from './ListItemsDrawer'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card'
import {handlegetProducts} from '../Services/ServiceNew'
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection:'row',
    minWidth: 275
  },
  typography: {
    padding: theme.spacing(),
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
    // fontSize: 14,
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
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    margin: theme.spacing(2),
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

export default function GetAllProductsComponent(props) {

  const [snackbar, setSnackbar] = React.useState(false);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [projectName, setProjectName] = React.useState(false);
  const [project, setProject] = React.useState([]);
  const [build, setBuild] = React.useState([]);
  const [response, setResponse] = React.useState([]);
  const [branch, setBranch] = React.useState([]);
  const [property1, setProperty1] = React.useState([]);
  const [showversion, setshowversion] = React.useState(false);
  const [openPaper, setOpenPaper] = React.useState(false)
  const [showversiondetails, setshowversiondetails] = React.useState(false);
  const [showpropertydetails, setshowpropertydetails] = React.useState(false);
  const [VersionName, setVersionName] = React.useState(false);
  const [BranchName,setBranchName]=React.useState(false);
  const [propertyName, setpropertyhName] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleSetVersion = (getversion) => {
    setVersionName(getversion);
  }
  const handleSetBranch=(getbranch)=>{
    setBranchName(getbranch);
  }
  const handleSetproperty = (getproperty) => {
    setpropertyhName(getproperty);
  }
  const handletpropertydetails = () => {
    setshowpropertydetails(!showpropertydetails);
  }
  const handleVersion = () => {
    setshowversion(!showversion);
    console.log(showversion);
  };
  const handleProperty = (getProperty) => {
    console.log(getProperty);  
    setProperty1(getProperty);
    console.log(property1.version_number);
  }
  const handleVersiondetails = () => {
    setshowversiondetails(!showversiondetails);
  };

  const handleBranchdetail = (getBranch) => {
    setBranch(getBranch);
  }

  const handleGetResponse = (getResponse) => {
    setResponse(getResponse);
  };

  const handleGetProjectName = (getProjectName) => {
    setProjectName(getProjectName);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleProject = (getProduct) => {
    setProject(getProduct);
  };
  const handleBuild = (getBuild) => {
    setBuild(getBuild);
  }
  const handleBranch = (getBranch) => {
    setBranch(getBranch);
  }
  const   SnackbarhandleClose = () => {
    setSnackbar(false );
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const handleDeshboard = () => {
    props.history.push("/Dashboard");
    console.log("MyDashboard");
  };
  const [openAddProductDialogBoxPaper,setOpenAddProductDialogBoxPaper] =React.useState(false)
  const handleAboutUs = () => {
    props.history.push("/AboutUsComponent");
  }
  const handleAdmin = () => {
    props.history.push("/Admin");
  }
  const handleLogout = () => {
    props.history.push("/");
  }
  
    useEffect(()=>{
      handlegetProducts().then(res => {
        console.log(res.clone().json())
        return res.json()
        //this.props.history.push('/Dashboard')
    }).then((key) => {
        console.log(key)
        setProject(key)
        console.log(key.product);
        
        localStorage.setItem("token",key.token)
  
    }).catch((err)=>{
      console.log(err)
    })},[]);
  // const handlegetProducts = () => {
    // handleShow();
    // console.log("in handlegetProducts");
    // var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    //   targetUrl = 'http://' + ip + ':8000/api/v1/workflow/product/'

    // fetch(proxyUrl + targetUrl)
    //   .then(blob => blob.json())
    //   .then(data => {
    //     handleProject(data);
    //     console.table(data);
    //     return data;
    //   })
    //   .catch(e => {
    //   });
  // }
  // const handleBuilds1 = (product_id,product_name,version_name,branch_name) => {
  //   handleGetProjectName(product_name);
  //   handleVersion();
  //   handleShow();
  //   console.log(product_id);
  //   // console.log(product_name);
   
    
  //   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  //     targetUrl = 'http://'+ip+':8000/api/v1/workflow/version/'+product_id ;
  //   fetch(proxyUrl + targetUrl)
  //     .then(blob => blob.json())
  //     .then(data => {
  //       handleBuild(data);
  //       console.table(data);
  //     })
  //     .catch(e => {
  //     });
  //     console.log("datatatta");
  //     var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  //     targetUrl = 'http://'+ip+':8000/api/v1/workflow/property/266/';
     
  //     fetch(proxyUrl + targetUrl)
  //     .then(blob => blob.json())
  //     .then(data => {
  //       handleBranch(data);
  //       handletpropertydetails();
        
  //       console.table(data);
  //       console.log(branch_name);
  //     })
  // }
  const openDialogBox =()=>{
    setOpenAddProductDialogBoxPaper(true)
   
  }
  
  const closeDialogBox =()=>{
    setOpenAddProductDialogBoxPaper(false)
  }
   const handleAddproduct=()=>{
  console.log("hiii");
  setSnackbar(true);
  
    setOpenPaper(false)
    props.history.push("/GetAllProductsComponent");
    
   }
  const handleBuildDetails=(id)=>{
    console.log(id);
    
    props.history.push({pathname:"/BuildDetails",state:{producId:id}
  });
  }

  return (
    <div className={classes.root}>
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
            Products
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
          AllProduct={handlegetProducts}
          AboutUs={handleAboutUs}
          Admin={handleAdmin}
          Logout={handleLogout} />

      </Drawer>
      <Dialog open={openAddProductDialogBoxPaper}>
      <DialogTitle >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <CloseIcon onClick={() => { closeDialogBox() }} style={{ cursor: 'pointer',justifyContent:'flex-end'  }} />
                                </DialogTitle>
                                <Divider />
                                <DialogContent >
                                <Typography className={classes.typography}>
                     <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment">Product Name</InputLabel>
          <OutlinedInput
              endAdornment={
              <InputAdornment position="end"></InputAdornment>
            }
  labelWidth={70}/>&nbsp;<Button  color='primary' variant="contained" 
  onClick={()=>handleAddproduct()}>Submit</Button>
        </FormControl>.</Typography> 
                                </DialogContent>
                            </Dialog>

      <main className={classes.content}  >
        <Container maxWidth="lg" >
       
          <div style={{ display: "flex", justifyContent: "flex-end", fontSize:'large', paddingTop: '100px' }}>
          
          <div >
          <AddCircleIcon onClick={()=>{openDialogBox()}} style={{fontSize: "200px",width:'190%',height:'40'}}>
           Products
          </AddCircleIcon>
          </div>
     <div 
     style={{display:'flex',justifyContent:"space-between"}}>
    </div> 
            {show ? project.map(value => (
              <div  onClick={()=>handleBuildDetails(value.id)} props={props}><ul>
                <b>
                 <Grid item xs={12} md={4} lg={3}>
                  <Paper className={classes.root} > <CardContent> 
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                  </Typography> {value.product_name}
                  </CardContent>
                  </Paper> </Grid>
                  </b> 
              </ul> 
            {console.log(value.id)
            }</div>
            )) : null
            }
            {console.log(project)
            }

          </div>

        </Container>
      </main>
      <div>
      </div>
      <Snackbar 
        open={snackbar  }
        onClose={SnackbarhandleClose} message="Product Added"
         />
                </div>
  );
}
