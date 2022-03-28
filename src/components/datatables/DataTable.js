import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {userColumns,userRows} from '../../datatablesource';

const DataTable = () => {
    const [data,setData] = useState(userRows);

    const handleDelete = (id) =>{
        setData(data.filter(item=>item.id !== id))
    }
    const actionColumn = [{field:'action',headerName: 'Action',width:200,renderCell:(params)=>{
        return(
            <div className="cellAction">
                <Link to="/users/test" style={{textDecoration:'none'}}>
                <div className="editButton">View</div>
                </Link>
                <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
            </div>
        )
    }}];
  return (
    <div className="datatable">       
    {/*  style={{ height: 400, width: "100%" }} */}
    <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
            Add New
            {/* <button style={{background:'red',color:'#fff',fontSize:'24px'}}>Add New</button> */}
        </Link>
    </div>
        <DataGrid
        className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
        />
    </div>
  );
};

export default DataTable;
