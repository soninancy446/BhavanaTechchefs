import React,{useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './TitleCard';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function RejectsCard(props) {
  const ip = "13.127.18.137"
  const [project, setProject] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [showData, setShowData] = React.useState(false);

  const handleAllProduct = () => {
    console.log(props);
     
    props.props.history.push("/GetAllProductsComponent")
    console.log("GetAllProducts");
  }
  useEffect(() => {
    async function fetchData() {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'http://' + ip + ':8000/api/v1/workflow/product_count/'
      const res = await fetch(proxyUrl + targetUrl)
      res
        .json()
        .then(res => setProject(res))
        .catch(err => setShow(err));
    }
    fetchData();
  }, []);
  const handleShowData = () => {
    setShowData(!showData);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Number of Products</Title>
      <Typography component="p" variant="h4">

      </Typography><span><h2>{JSON.stringify(project)}</h2></span>
      <Typography color="textSecondary" className={classes.depositContext}></Typography>
      <div>
        <Link color="primary" href="#" onClick={()=>handleAllProduct()}>
          View Products
        </Link>
      </div>
    </React.Fragment>
  );
}