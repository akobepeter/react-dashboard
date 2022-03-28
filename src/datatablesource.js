export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt="" className="cellImg" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,   
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell:(params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }   
  },

];

export const userRows = [
  {
    id: 1,
    username: "snow",
    img: require("./img/Peter.jpg"),
    status: "active",
    email: "issnow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Lannister",
    img: require("./img/Peter.jpg"),
    status: "passive",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "Jaime",
    img: require("./img/Peter.jpg"),
    status: "pending",
    email: "3snow@gmail.com",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: require("./img/Peter.jpg"),
    status: "passive",
    email: "4snow@gmail.com",
    age: 16,
  },
  {
    id: 5,
    username: "Clifford",
    img: require("./img/Peter.jpg"),
    status: "passive",
    email: "5snow@gmail.com",
    age: 44,
  },

  {
    id: 6,
    username: "Roxie",
    img: require("./img/Peter.jpg"),
    status: "active",
    email: "6snow@gmail.com",
    age: 65,
  },
  {
    id: 7,
    username: "Frances",
    img: require("./img/Peter.jpg"),
    status: "pending",
    email: "7snow@gmail.com",
    age: 36,
  },

  {
    id: 8,
    username: "Melisandre",
    img: require("./img/Peter.jpg"),
    status: "active",
    email: "8snow@gmail.com",
    age: 150,
  },

  {
    id: 9,
    username: "Targaryen",
    img: require("./img/Peter.jpg"),
    status: "pending",
    email: "snow@gmail.com",
    age: 45,
  },

  {
    id: 10,
    username: "Arya",
    img: require("./img/Peter.jpg"),
    status: "active",
    email: "snow@gmail.com",
    age: 25,
  },
];
