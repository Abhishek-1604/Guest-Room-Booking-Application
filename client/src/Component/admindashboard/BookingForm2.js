import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm2 = () => {
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [username, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [rentPerDay] = useState(10000); // Initial rent per day value
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [availability, setAvailability] = useState("unknown");

  useEffect(() => {
    if (checkinDate && checkoutDate) {
      axios.get('http://localhost:5000/app/booking/getall', {
        params: {
          checkinDate: checkinDate.toISOString(),
          checkoutDate: checkoutDate.toISOString()
        }
      })
        .then(res => {
          if (!res.data.available) {
            setAvailability("not available");
            setUnavailableDates([checkinDate, checkoutDate]);
          } else {
            setAvailability("available");
          }
        })
        .catch(error => {
          console.error('Error:', error);
          setAvailability("unknown");
        });
    }
  }, [checkinDate, checkoutDate]);

  const calculateTotalRent = () => {
    if (!checkinDate || !checkoutDate) return 0;

    const durationInDays = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
    return durationInDays * rentPerDay;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!checkinDate || !checkoutDate || !username || !mobileNumber) {
      alert("Please fill in all fields.");
      return;
    }

    if (mobileNumber.length !== 10) {
      alert("Mobile number should be exactly 10 digits.");
      return;
    }

    if (availability !== "available") {
      alert("Room not available for the selected dates.");
      return;
    }

    // Additional handling for form submission can be added here
    const totalRent = calculateTotalRent();
    console.log("Total Rent:", totalRent);

    const bookingData = {
      checkin: checkinDate,
      checkout: checkoutDate,
      username: username,
      mobilenumber: mobileNumber,
      rentperday: rentPerDay,
      totalrent: totalRent
    };

    axios.post('http://localhost:5000/app/booking/post/room1', bookingData, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          alert("Booking successful!");
        } else {
          alert("Booking error!");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Booking error!");
      });
  };

  return (
    <>
      <div className="container" style={{ backgroundColor: "#f2f2f2", padding: "20px" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">BOOKINGS</h2>
            <form onSubmit={handleSubmit} style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px" }}>
              {/* Check-in Date */}
              <div className="mb-3">
                <label className="form-label">Check-in Date:</label>
                <ReactDatePicker
                  className="form-control"
                  selected={checkinDate}
                  onChange={(date) => setCheckinDate(date)}
                  minDate={new Date()}
                  maxDate={checkoutDate ? new Date(checkoutDate) : new Date(new Date().setDate(new Date().getDate() + 30))}
                  dateFormat="dd/MM/yyyy"
                  highlightDates={unavailableDates}
                />
              </div>
              {/* Check-out Date */}
              <div className="mb-3">
                <label className="form-label">Check-out Date:</label>
                <ReactDatePicker
                  className="form-control"
                  selected={checkoutDate}
                  onChange={(date) => setCheckoutDate(date)}
                  minDate={checkinDate || new Date()}
                  maxDate={checkinDate ? new Date(new Date(checkinDate).getTime() + 30 * 24 * 60 * 60 * 1000) : new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)}
                  dateFormat="dd/MM/yyyy"
                  highlightDates={unavailableDates}
                />

              </div>
              {/* Username */}
              <div className="mb-3">
                <label className="form-label">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {/* Mobile Number */}
              <div className="mb-3">
                <label className="form-label">Mobile Number:</label>
                <input
                  type="text"
                  className="form-control"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              {/* Rent Per Day */}
              <div className="mb-3">
                <label className="form-label">Rent Per Day:</label>
                <input
                  type="number"
                  className="form-control"
                  value={rentPerDay}
                  readOnly
                />
              </div>
              {/* Total Rent */}
              <div className="mb-3">
                <label className="form-label">Total Rent:</label>
                <input
                  type="number"
                  className="form-control"
                  value={calculateTotalRent()}
                  readOnly
                />
              </div>
              {/* Availability Message */}
              {availability === "available" && (
                <div className="alert alert-success" role="alert">
                  Rooms are available for the selected dates.
                </div>
              )}
              {availability === "not available" && (
                <div className="alert alert-danger" role="alert">
                  Rooms are not available for the selected dates.
                </div>
              )}
              {availability === "unknown" && (
                <div className="alert alert-info" role="alert">
                  Please select check-in and check-out dates to check availability.
                </div>
              )}
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm2;
