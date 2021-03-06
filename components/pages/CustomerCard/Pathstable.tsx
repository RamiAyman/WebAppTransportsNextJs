import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import RoomIcon from '@material-ui/icons/Room';
import { Button } from '@material-ui/core';
import AddAccount from '../Accounts/AddAccount';
import PathNewStation from './PathNewStation';
import NewStation from './NewStation';
import ButtonNewStation from './PathNewStation';
import Buttonpath from './Buttonpath';
import NewPath from './NewPath';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function path1(){
return (
    <div className="inline-flex space-x-4">
    <label className="flex-1 ">From</label>
    <RoomIcon  fontSize="small"/>
    
   


<label className="flex-1 ">to</label>

    
    <RoomIcon  fontSize="small"/>

       
        
  </div>
)
};
interface Data {
  path ;
  StartAt: string;
  EndAt: string;
  Period :string; 
  Distance :string
  Passengers: number;
  Station: number;

}
function createData(path , StartAt :string, EndAt :string, Period :string,  Distance :string,Passengers :number,Station :number) {
  return { path, StartAt, EndAt, Period, Distance,Passengers,Station};
};
function buton(){
  const [open, setOpen] = React.useState(false);

 return(
  <div>
    <ButtonNewStation open={open} setOpen={setOpen} />
  <AddAccount open={open} setOpen={setOpen}>
    
  </AddAccount>

  </div>);
 
  
};
const rows = [
  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12),
  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12),

  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12),

  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12),

  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12),

  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12),

  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12),




];

export default function BasicTable() {
  const classes = useStyles();
  const [ postNum, setPostNum] = useState(3); // Default number of posts dislplayed
  function lessClick() {
    setPostNum(prevPostNum => prevPostNum -3)
};
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 3) // 3 is the number of posts you want to load per click
  };
  const [open, setOpen] = React.useState(false);
  const [opena, setOpena] = React.useState(false);

  return (
    <TableContainer component={Paper} >
      <div className="py-5">
        <Buttonpath  open={opena} setOpen={setOpena} />
        <NewPath open={opena} setOpen={setOpena} ></NewPath>
      </div>
      <Table  aria-label="simple table " >
        <TableHead className="bg-gray-50 ">
          <TableRow> 
            <TableCell className="text-xs" align="center">path</TableCell>
            <TableCell className="text-xs" align="center">StartAt</TableCell>
            <TableCell className="text-xs" align="center">EndAt</TableCell>
            <TableCell className="text-xs" align="center">Period</TableCell>
            <TableCell className="text-xs" align="center">Distance</TableCell>
            <TableCell className="text-xs" align="center">Passengers</TableCell>
            <TableCell className="text-xs" align="center">Station</TableCell>
            <TableCell className="text-xs" align="center">Actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {rows.slice(0, postNum).map((row) => (
    
            <TableRow key={row.path}>

                 <TableCell className="text-xs " align="center" >
                   {row.path}
                   </TableCell>
              <TableCell align="center">
                {row.StartAt}
              </TableCell>
             
              <TableCell align="center">{row.EndAt}</TableCell>
              <TableCell align="center">{row.Period}</TableCell>
              <TableCell align="center">{row.Distance}</TableCell>
              <TableCell align="center">{row.Passengers}</TableCell>
              <TableCell align="center">{row.Station}</TableCell>
                <TableCell >
                <PathNewStation open={open} setOpen={setOpen} />
  <NewStation open={open} setOpen={setOpen}>
    
  </NewStation>
                </TableCell>
             
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mx-8 flex flex-row justify-between content-center items-center">
      <Button  color="primary" onClick={handleClick} >Show More</Button>
      <Button color="primary" onClick={lessClick}>Show Less</Button>
      </div>
    </TableContainer>
  );
}
