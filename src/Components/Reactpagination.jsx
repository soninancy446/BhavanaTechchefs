import React from 'react'
import Pagination from '@material-ui/lab/Pagination';

const Reactpagination = ({ postsPerPage, totalPosts, paginate }) => {
   // const [pageNumbers,setPageNumbers] = React.useState();
   const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i)
    }
const pagenumber =  Math.ceil(totalPosts / postsPerPage)
  console.log("pagination-->",pageNumbers.length)
    return (
   
       <Pagination  size="small"  />
       
    );
  };
  
  export default Reactpagination;