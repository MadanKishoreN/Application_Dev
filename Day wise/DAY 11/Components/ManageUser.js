// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../Asserts/Style/ManageUsers.css'; // Updated CSS file path

// const ManageUsers = () => {
//   const [userList, setUserList] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('No token found');
//       }

//       const response = await axios.get('http://localhost:8080/api/users/getAll', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       setUserList(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error.response ? error.response.data : error.message);
//       if (error.response && error.response.status === 403) {
//         console.error('Access denied. Please check your permissions or token.');
//       }
//     }
//   };

//   return (
//     <div className="manage-users-container">
//       <h2>Manage Users</h2>

//       <table className="manage-users-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Role</th>
//             <th>Experience</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userList.length > 0 ? (
//             userList.map(user => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.role}</td>
//                 <td>{user.experience}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No users available.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageUsers;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
  TextField, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import '../Asserts/Style/ManageUsers.css';

const ManageUsers = () => {
  const [userList, setUserList] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    role: '',
    experience: '',
  });

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await axios.get('http://localhost:8080/api/users/getAll', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      setUserList(response.data);
    } catch (error) {
      console.error('Error fetching users:', error.response ? error.response.data : error.message);
      if (error.response && error.response.status === 403) {
        console.error('Access denied. Please check your permissions or token.');
      }
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({ id: '', name: '', role: '', experience: '' });
    setIsEdit(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = () => {
    setIsEdit(false);
    handleOpen();
  };

  const handleEditUser = (user) => {
    setFormData(user);
    setIsEdit(true);
    handleOpen();
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      if (isEdit) {
        // Update user
        await axios.put(`http://localhost:8080/api/users/update/${formData.id}`, formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
      } else {
        // Add new user
        await axios.post('http://localhost:8080/api/users/createUser', formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
      }

      fetchUsers();
      handleClose();
    } catch (error) {
      console.error('Error saving user:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="manage-users-container">
      <h2>Manage Users</h2>
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddUser} style={{ marginBottom: '20px' }}>
        Add User
      </Button>

      <TableContainer component={Paper}>
        <Table className="manage-users-table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.length > 0 ? (
              userList.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.experience}</TableCell>
                  <TableCell align="right">
                    <IconButton color="primary" onClick={() => handleEditUser(user)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5}>No users available.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEdit ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="role"
            label="Role"
            value={formData.role}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="experience"
            label="Experience"
            value={formData.experience}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {isEdit ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ManageUsers;
