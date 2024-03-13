import axios from 'axios';
import React, { useEffect, useState } from 'react';

function BookingsDetails2() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/app/booking2/getall")
      .then((res) => {
        console.log(res.data);
        setBookings(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteBooking = (id) => {
    axios.delete(`http://localhost:5000/app/booking2/${id}`)
      .then((res) => {
        console.log(res.data);
        // Filter out the deleted booking from the state
        setBookings(bookings.filter(booking => booking._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting booking:', error);
      });
  };
  

  return (
    <div className="booking-table table-responsive">
      <h2>Booking Details</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Username</th>
            <th>Mobile Number</th>
            <th>Rent Per Day</th>
            <th>Total Rent</th>
            <th>Action</th> {/* Added Action column for Delete button */}
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.checkin}</td>
              <td>{booking.checkout}</td>
              <td>{booking.username}</td>
              <td>{booking.mobilenumber}</td>
              <td>{booking.rentperday}</td>
              <td>{booking.totalrent}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeleteBooking(booking._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingsDetails2;
