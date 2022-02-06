import { useEffect, useState } from "react";
import {useNavigate, useParams, Link} from "react-router-dom"
import axios from "axios";
import * as React from 'react';
import {Table ,TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, IconButton, Paper} from '@mui/material';
import './Paging.css'; 
import Pagination from "react-js-pagination";
import NativeSelect from '@mui/material/NativeSelect';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import { withStyles } from "@material-ui/core/styles";
import { Box, margin } from '@mui/system';


const StyledTableRow = withStyles((theme) => ({
  root: {
    height: 50
  }
}))(TableRow);

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[200]),
  '&:hover': {
    backgroundColor: grey[200],
  },
}));

const ColorTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 20
}));

export default function TavernPage() {
  let navigate = useNavigate(); 
  
  let params = useParams();
  const pagenum = parseInt(params.page)
  const [inputData, setInputData] = useState([
    {
      bidx : 1,
      buserid : "id",
      btitle : "title" ,
      bcontent : "content" ,
      regdate : "regdate" ,
      modidate : "modidate",
      bhit : 0,
      blikeuser : "likecount" },
    {
      bidx : 2,
      buserid : "id",
      btitle : "title" ,
      bcontent : "content" ,
      regdate : "regdate" ,
      modidate : "modidate",
      bhit : 0,
      blikeuser : "likecount" },
    {
      bidx : 3,
      buserid : "id",
      btitle : "title" ,
      bcontent : "content" ,
      regdate : "regdate" ,
      modidate : "modidate",
      bhit : 0,
      blikeuser : "likecount" },
    {
      bidx : 4,
      buserid : "id",
      btitle : "title" ,
      bcontent : "content" ,
      regdate : "regdate" ,
      modidate : "modidate",
      bhit : 0,
      blikeuser : "likecount" },
      {
        bidx : 5,
        buserid : "id",
        btitle : "title" ,
        bcontent : "content" ,
        regdate : "regdate" ,
        modidate : "modidate",
        bhit : 0,
        blikeuser : "likecount" },
      {
        bidx : 6,
        buserid : "id",
        btitle : "title" ,
        bcontent : "content" ,
        regdate : "regdate" ,
        modidate : "modidate",
        bhit : 0,
        blikeuser : "likecount" },
      {
        bidx : 7,
        buserid : "id",
        btitle : "title" ,
        bcontent : "content" ,
        regdate : "regdate" ,
        modidate : "modidate",
        bhit : 0,
        blikeuser : "likecount" },
      {
        bidx : 8,
        buserid : "id",
        btitle : "title" ,
        bcontent : "content" ,
        regdate : "regdate" ,
        modidate : "modidate",
        bhit : 0,
        blikeuser : "likecount" },
        {
          bidx : 9,
          buserid : "id",
          btitle : "title" ,
          bcontent : "content" ,
          regdate : "regdate" ,
          modidate : "modidate",
          bhit : 0,
          blikeuser : "likecount" },
        {
          bidx : 10,
          buserid : "id",
          btitle : "title" ,
          bcontent : "content" ,
          regdate : "regdate" ,
          modidate : "modidate",
          bhit : 0,
          blikeuser : "likecount" },
        {
          bidx : 11,
          buserid : "id",
          btitle : "title" ,
          bcontent : "content" ,
          regdate : "regdate" ,
          modidate : "modidate",
          bhit : 0,
          blikeuser : "likecount" },
        {
          bidx : 12,
          buserid : "id",
          btitle : "title" ,
          bcontent : "content" ,
          regdate : "regdate" ,
          modidate : "modidate",
          bhit : 0,
          blikeuser : "likecount" },
  ])


//   const callApi = async() => {
//     const response = await axios.get("http://localhost:3001/board")
//     setInputData([...inputData,...response.data])
//   }
  
//   useEffect(() => {
//     callApi();
//   },[]);

  const Paging = () => {
    const [page, setPage] = useState(parseInt(params.page));
    const handlePageChange = (page) => { 
      setPage(page); 
      navigate(`/tavern/page/${page}`);
    };
    return (
      <Pagination 
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={inputData.length}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange} 
      />
    ); 
  }; 

//  const onClick = (e) => {
//   const idx = e.currentTarget.id
//   axios.put("http://localhost:3001/board/hit",{bidx:idx})
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//         console.log(error.response.data)
//         alert(error.response.data.error)
//     })

//   navigate(`/board/detail/${idx}`)
//   }

  const onSearch = (e) => {
    e.preventDefault();
    const searchcat = e.target.category.value
    const searchvalue = e.target.search.value
    console.log(`searching ${searchcat} is ${searchvalue}`)
    navigate(`/board/search`,{state:
      {
        searchcat:searchcat,
        searchvalue:searchvalue
      }
    })
  }

  const pagelist = inputData.slice((pagenum-1)*10,pagenum*10)


  return (
    <>
    <Paper sx={{  maxWidth: "80%", margin: "auto" }}>
      <br />
      <TableContainer sx={{ minHeight: 536.528, maxWidth: "98%", margin: "auto" }}>
        <Table size="small" sx={{ maxWidth: "98%", margin: "auto", backgroundColor: "black"}} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "white" }}>
            <TableRow >
              <TableCell sx={{ fontWeight:1000 , fontSize: 15 }}>제목</TableCell>
              <TableCell sx={{ fontWeight:1000 , fontSize: 15 }} width="15%" align="center">작성자</TableCell>
              <TableCell sx={{ fontWeight:1000 , fontSize: 15 }} width="10%" align="center">조회수</TableCell>
              <TableCell sx={{ fontWeight:1000 , fontSize: 15 }} width="15%" align="center">마지막 활동</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {pagelist.map((row) => (
              
              <StyledTableRow
                id={row.bidx} 
                // onClik={onClick}
                key={row.bidx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor:"pointer" }}
              >
                <ColorTableCell>{row.btitle}</ColorTableCell>
                <ColorTableCell component="th" scope="row" align="center">
                  {row.buserid}
                </ColorTableCell>
                <ColorTableCell align="center">{row.bhit}</ColorTableCell>
                <ColorTableCell align="center">{row.regdate}</ColorTableCell>
              </StyledTableRow>
            ))}

          </TableBody>
        </Table>
        
      </TableContainer>
       <Box sx={{ display:"inline-block", margin:1 }}>
          <form onSubmit={onSearch}>
            <NativeSelect
              inputProps={{
                name: 'category'
              }}
            >
              <option value="buserid"> 작성자</option>
              <option value="btitle"> 제목</option>
            </NativeSelect>
            <TextField size="small" name ="search" type="text"  />
            <IconButton><SearchIcon /></IconButton>
          </form>
        </Box>
        <Box sx={{ display:"inline-block", float:"right", margin:1 }}>
          <ColorButton sx={{ fontWeight:1000 , fontSize: 15 }} variant="text" component={Link} to="/tavern">글 쓰기</ColorButton>
        </Box>
    </Paper>
    <Paging />
    </>
  );
}
