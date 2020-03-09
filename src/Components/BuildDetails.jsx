import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
import Pagination from './Pagination'
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
    const ip = "13.127.18.137"
    const classes = useStyles();
    const [value, setValue] = React.useState();
    const [radioButton, setradioButton] = React.useState(false)
    const [open, setOpen] = React.useState(true);
    const [show, setShow] = React.useState(false);
    const [project, setProject] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postPerPage, setPostPerPage] = React.useState(3);
    const [secondradionbutton, setSecondradionbutton] = React.useState(false);
    const [showpropertydetails, setshowpropertydetails] = React.useState(false);
    const [build, setBuild] = React.useState([]);
    const [commitId,setCommtId] = React.useState();
    // const [projectName, setProjectName] = React.useState(false);
    const [productId, setproductId] = React.useState(false);
    const [Branch, setBranch] = React.useState([]);

    // const handleRadioGroupChange = (value) => {
    //     console.log("roles---->", value)
    //     this.setState({
    //         radiovalue: value
    //     })
    // }
    const storeCommtId = (event) =>{
        setCommtId(event)
    }
    const handleBranch = (getBranch) => {
        setBranch(getBranch)
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleRadioGroupChange = (value) => {
        setValue(value)
        if(value === 1){
            setSecondradionbutton(true)
        }
        else
        setradioButton(true);
    }
    const radioButtononeClick = () => {
        //setradioButton();
        setSecondradionbutton(true)
    }
    const radioButtonTwoClick = () => {
        setradioButton(true);
   // setSecondradionbutton()
    }
    const handleGetProductId = (getProductId) => {
        setproductId(getProductId);
    }
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const handleDeshboard = () => {
        props.history.push("/Dashboard");
        console.log("MyDashboard");
    };
    const handleAllProduct = () => {
        console.log("GetAllProducts");
        props.history.push("/GetAllProductsComponent");
    }
//     const handleRadioGroupChange = ()=>{
// console.log("hi")
//     }
    const handleAboutUs = () => {
        console.log("AboutComponent");
        props.history.push("/AboutUsComponent");
    }
    const handleTrigger = (version_id) => {
        // props.history.push("/TriggerComponent");
        props.history.push({ pathname: "/TriggerComponent", state: { VersionId: version_id } })
    }
    const handle = (getProject) => {
        setProject(getProject)
        console.log(getProject);
    }
    const styles = theme => ({
        tableRow: {
            "&:hover": {
                backgroundColor: "blue !important",
            }
        }
    });
    useEffect(() => {
        async function fetchData(product_id) {
            // handleGetProjectName(product_id);
            handleGetProductId(product_id)
            var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
                // targetUrl = 'http://' + ip + ':8000/api/v1/workflow/build_table22'
                targetUrl = 'http://' + ip + ':8000/api/v1/workflow/build_table' + props.location.state.producId;
            console.log("data");
            const res = await fetch(proxyUrl + targetUrl)
                .then(blob => blob.json())
                .then(data => {
                    console.table(data);
                    handle(data);
                    return data;
                })
                .catch(e => {
                });
            console.log(res);
            console.log(product_id);

            console.log(project);

        }
        fetchData();
    }, []);
    const indexOfLastPage = currentPage * postPerPage;
    console.log(indexOfLastPage)
    const indexOfFirstPage = indexOfLastPage - postPerPage;
    console.log(indexOfFirstPage)
    console.log(project.length)
    const currentPosts = project.slice(indexOfFirstPage, indexOfLastPage)
    const handleBranchData = (branch) => {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            // targetUrl = 'http://'+ip+':8000/api/v1/workflow/rebuild/'+branch ;
            targetUrl = 'http://' + ip + ':8000/api/v1/workflow/rebuild/master/';
        fetch(proxyUrl + targetUrl)
            .then(blob => blob.json())
            .then(data => {
                handleBranch(data);
                // alert("Build Trigger Failed.. Response code: 400")
                console.table(data);
                console.log(branch);
            })
            .catch(e => {
            });
        console.log("datatatta");
    }
    const openLink = (value) => {
        window.open(value, "_blank");
    }
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div className={classes.root}>
            {console.log(props)}
            {/* {console.log(props.location.state.producId)} */}
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
                        BuildDetails
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
                    AboutUs={handleAboutUs} />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>

                    <RadioGroup aria-label="role" className="roleContents"  row  >
                        {radioButton === false ? <FormControlLabel control={<Radio />} value="1" onClick={() => handleRadioGroupChange(1)} label={<select class="DropList" onClick={() => { handleBranchData() }}>
                        
                            <option value="Development">Development</option>
                            <option value="Testing">Testing</option>
                            <option value="staging">Staging</option>
                            <option value="Master">Master</option>
                        </select>} /> : ''}
                       
                        {secondradionbutton === false ? <FormControlLabel value="2" onClick={() => handleRadioGroupChange(2)} control={<Radio />} label={<div><TextField id="outlined-basic" label="Commit id" variant="outlined" onChange={storeCommtId} />
                        <Button variant="primary" justifyContent='flex-end' variant="contained" onClick={()=>{handleBranchData()}}>Trigger</Button>
                        </div>} onClick={() => { handleRadioGroupChange() }} /> : ''}
                        


                    </RadioGroup>





                    {/* <select class="DropList" onClick={() => { handleBranchData() }}>
                        <option value="Development">Development</option>
                        <option value="Testing">Testing</option>
                        <option value="staging">Staging</option>
                        <option value="Prodution">Production</option>
                    </select> */}
                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            <Table ><div>
                                <TableHead >
                                    <div  >
                                        <TableRow >
                                            <TableCell className={classes.tableColumnWidth} >ProductName</TableCell>
                                            <TableCell className={classes.tableColumnWidth}>Version</TableCell>
                                            <TableCell className={classes.tableColumnWidth}>Status</TableCell>
                                            <TableCell className={classes.tableColumnWidth}>Total Test</TableCell>
                                            <TableCell className={classes.tableColumnWidth}>Passed Test</TableCell>
                                            <TableCell className={classes.tableColumnWidth}>Failed Test</TableCell>
                                            <TableCell className={classes.tableColumnWidth} style={{ textAlign: 'center' }}>NE</TableCell>
                                            <TableCell className={classes.tableColumnWidth} style={{ textAlign: 'center' }}>Download</TableCell>
                                        </TableRow>
                                    </div>
                                </TableHead>
                                <TableBody >
                                    {currentPosts.map(value => (
                                        <TableRow class="table-row">
                                            <div hover style={{ cursor: 'pointer' }}>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} className={classes.tableDataWidth}>{value.product_name}</TableCell>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} className={classes.tableDataWidth}>{value.version_name}</TableCell>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} className={classes.tableDataWidth}>{value.properties_dict.status}</TableCell>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} className={classes.tableDataWidth}>{value.properties_dict.test_total}</TableCell>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} className={classes.tableDataWidth}>{value.properties_dict.test_passed}</TableCell>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} className={classes.tableDataWidth}>{value.properties_dict.test_failed}</TableCell>
                                                <TableCell onClick={() => handleTrigger(value.version_id)} style={{ textAlign: 'center' }} className={classes.tableDataWidth}>{value.properties_dict.test_ne}</TableCell>
                                                <TableCell className={classes.tableDataWidth}>
                                                    <a onClick={() => openLink(value.properties_dict.download_url)} ><GetAppOutlined /></a></TableCell>
                                            </div>
                                        </TableRow>
                                        // to={value.properties_dict.download_url}
                                    ))}
                                </TableBody>
                            </div> </Table>
                            <Pagination postsPerPage={postPerPage} totalPosts={project.length} paginate={paginate} />
                        </TableContainer>
                    </Paper>
                </Container></main>
        </div>
    );
}