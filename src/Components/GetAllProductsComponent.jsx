
import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircleOutline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItemsDrawer from './ListItemsDrawer'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card'
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
    minWidth: 275
  },
  typography: {
    padding: theme.spacing(5),
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
  const ip = "13.127.18.137"
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
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const handleDeshboard = () => {
    props.history.push("/Dashboard");
    console.log("MyDashboard");
  };
  
  const handleAboutUs = () => {

    console.log("AboutComponent");

    props.history.push("/AboutUsComponent");
  }
  
  useEffect(() => {
    handleShow();
    console.log("in handlegetProducts");
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'http://' + ip + ':8000/api/v1/workflow/product/'

    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        handleProject(data);
        console.table(data);
        return data;
      })
      .catch(e => {
      });
  },[]);
  const handlegetProducts = () => {
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
  }
  const handleBuilds1 = (product_id,product_name,version_name,branch_name) => {
    handleGetProjectName(product_name);
    handleVersion();
    handleShow();
    console.log(product_id);
    // console.log(product_name);
   
    
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'http://'+ip+':8000/api/v1/workflow/version/'+product_id ;
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        handleBuild(data);
        console.table(data);
      })
      .catch(e => {
      });
      console.log("datatatta");
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'http://'+ip+':8000/api/v1/workflow/property/266/';
      // targetUrl = 'http://'+ip+':8000/api/v1/workflow/property/'+branch_name;
      // targetUrl = 'http://' + ip + ':8000/api/v1/workflow/property/' + projectName + '/version/' + VersionName + '/branch/' + branch_name;
      // console.log("dfsdgdfg");
      fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        handleBranch(data);
        handletpropertydetails();
        
        console.table(data);
        console.log(branch_name);
      })
  }
  
  // const handleBranches = (product_id, version_id) => {
  //   handleVersion();
  //   handleVersiondetails();
  //   handleSetVersion(version_id);
  //   console.log(version_id);
   
  //   console.log("in data");
  //   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  //    targetUrl = 'http://' + ip + ':8000/api/v1/workflow/property/' + projectName + '/version/' + version_id; 
  //   console.log("dfsdgdfg");
  //   fetch(proxyUrl + targetUrl)
  //     .then(blob => blob.json())
  //     .then(data => {
  //       handleBranch(data);
  //       console.table(data);
  //     })
  //     .catch(e => {

  //     });
  // }
  // const handleBranchesdetails = (branch_name) => {

  //   console.log("aa");
  //   handleSetBranch();
  // handleShow();
    // handleProperty();
    // handletpropertydetails();
    // handleSetproperty(branch_name);
  //   console.log(branch_name);

  //   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    //   targetUrl = 'http://' + ip + ':8000/api/v1/workflow/property/' + projectName + '/version/' + VersionName + '/branch/' + branch_name;
    // console.log("dfsdgdfg");

  //   fetch(proxyUrl + targetUrl)
  //     .then(blob => blob.json())
  //     .then(data => {
  //       handleProperty(data);

  //       console.log(property1);
        
  //       console.table(data);


  //     })
  //     .catch(e => {

  //       console.log(e);
        

  //     });
  // }
   const handleRemoveproduct=()=>{
     console.log("asdfgh");
     alert("Product Removed")
     props.history.push("/GetAllProductsComponent");
     
   }
   const handleAddproduct=()=>{
     console.log("edfe");
     alert("Product Added");
    props.history.push("/GetAllProductsComponent");
    
   }
  const handleTrigger=()=>{
    props.history.push("/TriggerComponent");
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
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
          AboutUs={handleAboutUs} />

      </Drawer>
      <main className={classes.content} style={{backgroundColor: "coral"}} >
        <Container maxWidth="lg" >
        {/* <span class="iconify" data-icon="mdi-minus-circle-outline" data-inline="false"></span> */}
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", paddingTop: '140px' }}>
          <PopupState variant="popper" popupId="demo-popup-popper">
      {popupState => (
        <div>
          <AddCircleIcon variant="contained" color="primary" {...bindToggle(popupState)} style={{fontSize: "200px",width:'190%',height:'40',
        alignItems:'center',justifyContent:'center'}}>
           Products
          </AddCircleIcon>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={3}>
                <Paper>
                  <Typography className={classes.typography}> <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment">ProductName</InputLabel>
        
          <OutlinedInput
              endAdornment={
              <InputAdornment position="end">
              </InputAdornment>
            }
            labelWidth={70}/>&nbsp;<Button  color='primary' variant="contained" onClick={()=>handleAddproduct()}>Submit</Button>
        </FormControl>.</Typography>  
                </Paper> 
              </Fade>
            )}
          </Popper>
          <RemoveCircleIcon variant="contained" color="primary" {...bindToggle(popupState)} style={{width:'190%', height:'40',
        alignItems:'center',justifyContent:'center'}}>
           Products</RemoveCircleIcon>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={3}>
                <Paper>
                  <Typography className={classes.typography}> <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">ProductName</InputLabel>
        
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
              </InputAdornment>
            }
            labelWidth={70}
          />&nbsp;<Button color='primary' variant="contained" onClick={()=>handleRemoveproduct()}>Submit</Button>
        </FormControl>.</Typography>  
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState><span class="iconify" data-icon="mdi-minus-circle-outline" data-inline="false"></span>
            {show ? project.map(value => (
              <div onClick={()=>handleBuildDetails(value.id)} props={props}><ul>
                <b >
                 {/* <b onClick={() => handleBuilds1(value.id,value.product_name,value.branch_name,value.version_number)}> */}
                 <Grid item xs={12} md={4} lg={3}>
                  <Paper className={classes.root}> <CardContent> <Typography className={classes.title} color="textSecondary" gutterBottom>
                  </Typography> {value.product_name}</CardContent></Paper> </Grid>
                  </b> 
              </ul> 
            {console.log(value.id)
            }</div>
            )) : null
            }

          </div>

        </Container>
      </main>
      <div>
      </div>
    </div>
  );
}
