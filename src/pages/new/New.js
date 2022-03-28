import React,{useState} from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./New.scss";

const New = ({ title, inputs }) => {
  const [file,setFile] = useState('');
  //  console.log(file);
  const handleChange = (e)=>{
    e.preventDefault();
    setFile(e.target.files[0]);
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : ''} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file"  onChange={handleChange} style={{ display: "none" }} />
              </div>

              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label htmlFor="username">{input.label}</label>
                    <input
                      type={input.type}
                     
                      placeholder={input.placeholder}
                    />
                  </div>
                );
              })}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
