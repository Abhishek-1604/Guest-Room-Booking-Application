import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Customers() {
  const [delete1, setDelete] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/app/v2/reg/getall")
      .then((res) => {
        console.log(res.data);
        setDelete(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleDeleteBooking = (id) => {
    axios.delete(`http://localhost:5000/app/v2/${id}`)
      .then((res) => {
        console.log(res.data);
        // Filter out the deleted booking from the state
        setDelete(delete1.filter(delete1 => delete1._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting booking:', error);
      });
  };
  
  return (
    <div>
<div className="booking-table table-responsive">
      <h2>Booking Details</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Role</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Password</th>
            <th>Action</th> {/* Added Action column for Delete button */}
          </tr>
        </thead>
        <tbody>
          {/* {delete.map((delete, index) => ( */}
          {delete1.map((delete1, index)=>(
            <tr key={index}>
              <td>{delete1.role}</td>
              <td>{delete1.name}</td>
              <td>{delete1.emil}</td>
              <td>{delete1.password}</td>
             
              <td>
                <button className="btn btn-danger" onClick={() => handleDeleteBooking(delete1._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Customers