import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from '../../components/chart/Chart';
import TableList from '../../components/table/Table';
import "./Single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={require('../../img/Peter.jpg')} alt="" className="imgItem" />
               <div className="details">
                 <h1 className="itemTitle">Peter</h1>
                  <div className="detailItem">
                   <span className="itemKey">Email:</span>
                   <span className="itemValue">peter@gmail.com</span>
                  </div>

                  <div className="detailItem">
                   <span className="itemKey">Phone:</span>
                   <span className="itemValue">091213657899</span>
                  </div>

                  <div className="detailItem">
                   <span className="itemKey">Address:</span>
                   <span className="itemValue">Wuye,Abuja</span>
                  </div>
                  <div className="detailItem">
                   <span className="itemKey">Country:</span>
                   <span className="itemValue">Nigeria</span>
                  </div>

               </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title='User Spending(Last 6 months)'/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <TableList/>
        </div>
      </div>
    </div>
  );
};

export default Single;
