import React, { useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './TitleCard';

const rows = [];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function RecentProductTable(props) {
  const ip = "13.127.18.137"
  const [project, setProject] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [showData, setShowData] = React.useState(false);
  useEffect(() => {
    async function fetchData() {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'http://' + ip + ':8000/api/v1/workflow/build/latest_versions/'
      const res = await fetch(proxyUrl + targetUrl)
      res
        .json()
        .then(res => {
          console.log(res);
          setProject(res);

        })
        .catch(err => setShow(err));
    }
    fetchData();
  }, []);
  const handleShowData = () => {
    setShowData(!showData);
  };
const preventDefault=()=>{
  props.props.history.push("/BuildData");
}
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Builds</Title>
      <Table size="small">
        <TableHead>
          <TableRow>

            <TableCell>Product Name</TableCell>
            <TableCell>Build Version</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {project.map(row => (
            <TableRow key={row.id}>

              <TableCell>{row.product_name}</TableCell>
              <TableCell>{row.version_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Builds
        </Link>
      </div>
    </React.Fragment>
  );
}