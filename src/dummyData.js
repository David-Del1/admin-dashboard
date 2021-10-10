import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const data = [
  {
    name: 'Jan',
    ActiveUsers: 4000,
  },
  {
    name: 'Feb',
    ActiveUsers: 3000,
  },
  {
    name: 'Mar',
    ActiveUsers: 2000,

  },
  {
    name: 'Apr',
    ActiveUsers: 2780,

  },
  {
    name: 'May',
    ActiveUsers: 1890,

  },
  {
    name: 'Jun',
    ActiveUsers: 2390,

  },
  {
    name: 'Jul',
    ActiveUsers: 3490,
  },
];

export const rows = [
  { 
    id: 1, 
    username: 'Jon Snow', 
    avatar: "https://assets.vogue.com/photos/589176397edfa70512d6493d/16:9/w_1280,c_limit/jon-snow-game-of-thrones.jpg", 
    email: "jon@gmail.com", 
    status: 'Active', 
    transaction: '$120.00' 
  },
  { 
    id: 2, 
    username: 'Jon Snow', 
    avatar: "https://assets.vogue.com/photos/589176397edfa70512d6493d/16:9/w_1280,c_limit/jon-snow-game-of-thrones.jpg", 
    email: "jon@gmail.com", 
    status: 'Active', 
    transaction: '$120.00' 
  },
  { 
    id: 3, 
    username: 'Jon Snow', 
    avatar: "https://assets.vogue.com/photos/589176397edfa70512d6493d/16:9/w_1280,c_limit/jon-snow-game-of-thrones.jpg", 
    email: "jon@gmail.com", 
    status: 'Active', 
    transaction: '$120.00' 
  },
  { 
    id: 4, 
    username: 'Jon Snow', 
    avatar: "https://assets.vogue.com/photos/589176397edfa70512d6493d/16:9/w_1280,c_limit/jon-snow-game-of-thrones.jpg", 
    email: "jon@gmail.com", 
    status: 'Active', 
    transaction: '$120.00' 
  },
  { 
    id: 5, 
    username: 'Jon Snow', 
    avatar: "https://assets.vogue.com/photos/589176397edfa70512d6493d/16:9/w_1280,c_limit/jon-snow-game-of-thrones.jpg", 
    email: "jon@gmail.com", 
    status: 'Active', 
    transaction: '$120.00' 
  },
  { 
    id: 6, 
    username: 'Jon Snow', 
    avatar: "https://assets.vogue.com/photos/589176397edfa70512d6493d/16:9/w_1280,c_limit/jon-snow-game-of-thrones.jpg", 
    email: "jon@gmail.com", 
    status: 'Active', 
    transaction: '$120.00' 
  },
  { 
    id: 7, 
    username: 'Jon Snow', 
    avatar: "https://assets.vogue.com/photos/589176397edfa70512d6493d/16:9/w_1280,c_limit/jon-snow-game-of-thrones.jpg", 
    email: "jon@gmail.com", 
    status: 'Active', 
    transaction: '$120.00' 
  },
  { 
    id: 8, 
    username: 'Jon Snow', 
    avatar: "https://assets.vogue.com/photos/589176397edfa70512d6493d/16:9/w_1280,c_limit/jon-snow-game-of-thrones.jpg", 
    email: "jon@gmail.com", 
    status: 'Active', 
    transaction: '$120.00' 
  },
  { 
    id: 9, 
    username: 'Jon Snow', 
    avatar: "https://assets.vogue.com/photos/589176397edfa70512d6493d/16:9/w_1280,c_limit/jon-snow-game-of-thrones.jpg", 
    email: "jon@gmail.com", 
    status: 'Active', 
    transaction: '$120.00' 
  },
  { 
    id: 10, 
    username: 'Jon Snow', 
    avatar: "https://assets.vogue.com/photos/589176397edfa70512d6493d/16:9/w_1280,c_limit/jon-snow-game-of-thrones.jpg", 
    email: "jon@gmail.com", 
    status: 'Active', 
    transaction: '$120.00' 
  },
  
];

export const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'user', headerName: 'User name', width: 200, renderCell: params => {
    return (
      <div className="userListUser">
        <img src={params.row.avatar} alt="" className="userListImg" />
        {params.row.username}
      </div>
    )
  } },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    width: 160, 
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: params => {
      return (
        <>
          <Link to={"/user/"+params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
            <DeleteOutline className="userListDelete" />
        </>
      )
    }
  }
];

export default data;