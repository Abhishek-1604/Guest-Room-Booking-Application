import axios from 'axios';
import React, { useState } from 'react';
// import { Nav } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
    const [houseOwner, setHouseOwner] = useState('');
    const [numRooms, setNumRooms] = useState(1);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [maxBookingDays, setMaxBookingDays] = useState(1); // Default max days for John's house
    const [maxRooms, setMaxRoom] = useState(1); // Default max days for John's house
    const [rentPrice, setRentPrice] = useState(5000); // Default rent price per day
    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState();
    const [totalRent, setTotalrent] = useState('')

    // Function to handle changes in house owner selection
    const handleHouseOwnerChange = (event) => {
        const selectedOwner = event.target.value;
        setHouseOwner(selectedOwner);

        // Adjust max booking days, max rooms, and rent price based on selected owner
        if (selectedOwner === 'John') {
            setMaxBookingDays(14); // Maximum 1 day for John's house
            setMaxRoom(3); // Maximum 3 rooms for John's house
            setRentPrice(5000); // Rent price per day for John's house
        } else if (selectedOwner === 'Andrew') {
            setMaxBookingDays(30); // Maximum 14 days for Andrew's house
            setMaxRoom(5); // Maximum 5 rooms for Andrew's house
            setRentPrice(10000); // Rent price per day for Andrew's house
        }
    };


    // Function to calculate total price based on selected dates and number of rooms
    const calculateTotalPrice = () => {
        if (!selectedStartDate || !selectedEndDate) return 0;

        const durationInDays = Math.ceil((selectedEndDate - selectedStartDate) / (1000 * 60 * 60 * 24));
        // setTotalrent(durationInDays * numRooms * rentPrice)
        return durationInDays * numRooms * rentPrice;
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform booking submission logic here
        if (!selectedStartDate || !selectedEndDate || !username || !mobileNumber) {
            alert('Please fill in all fields.');
            return;
        }
        if (mobileNumber.length !== 10) {
            alert('Mobile number should be exactly 10 digits.');
            return;
        }

        const totalPrice = calculateTotalPrice();
        // console.log('Booking submitted:', {

        //   houseOwner,
        //   numRooms,
        //   startDate: selectedStartDate,
        //   endDate: selectedEndDate,
        //   totalPrice,
        //   username,
        //   mobileNumber

        // });
    }

    // const nav = useNavigate();
    function PostData(e) {
        e.preventDefault();


        let selectedStartDate = document.getElementById("startDate").value;
        let selectedEndDate = document.getElementById("endDate").value;
        let username = document.getElementById("username").value;
        let mobileNumber = document.getElementById("mobileNumber").value;
        let rent = document.getElementById('rentperday').textContent; // Use textContent instead of value
        let totalrent = document.getElementById("totalPrice").textContent; // Use textContent instead of value

        let key = {

            checkin: selectedStartDate,
            checkout: selectedEndDate,
            username: username,
            mobilenumber: mobileNumber,
            rentperday: rent,
            totalrent: totalrent
        };
        // console.log(key)

        axios.post('http://localhost:5000/app/booking/post/room1',key)
        .then(res=>{
            console.log(res);
        })

        // axios.post('http://localhost:7000/app/booking/post/room1', key)
        //     .then((res) => {
        //         console.log(res.data);
        //         // if (res.data.msg === "success") {
        //         //     alert("Values are submitted");
        //         //     // window.location.assign("/data");
        //         //     //   nav('/data');
        //         // } else {
        //         //     alert("Values are not submitted");
        //         // }
        //     })
        //     .catch((error) => {
        //         // console.error('Error:', error);
        //         alert(error,"An error occurred while submitting values");
        //     });


    }

    return (
        <div className="container" style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Book a Room</h2>
                    <form onSubmit={PostData} style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                        {/* <div className="mb-3">
                            <label htmlFor="houseOwner" className="form-label">Select House Owner:</label>
                            <select id="houseOwner" className="form-select" value={houseOwner} onChange={handleHouseOwnerChange}>
                                <option value="">Select Owner</option>
                                <option value="John">John's House</option>
                                <option value="Andrew">Andrew's House</option>
                            </select>
                        </div> */}
                        {/* <div className="mb-3">
                            <label htmlFor="numRooms" className="form-label">Number of Rooms:</label>
                            <input
                                type="number"
                                id="numRooms"
                                className="form-control"
                                min="1"
                                max={maxRooms} // Maximum number of rooms available for each owner
                                value={numRooms}
                                onChange={(e) => setNumRooms(parseInt(e.target.value))}
                            />
                        </div> */}
                        <div className="mb-3">
                            <label className="form-label">Check-in Date:</label>
                            <DatePicker
                                className="form-control"
                                id='startDate'
                                selected={selectedStartDate}
                                onChange={(date) => setSelectedStartDate(date)}
                                minDate={new Date()}
                                maxDate={selectedEndDate}
                                startDate={selectedStartDate}
                                endDate={selectedEndDate}
                                selectsStart
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select Start Date"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Check-out Date:</label>
                            <DatePicker
                                className="form-control"
                                id='endDate'
                                selected={selectedEndDate}
                                onChange={(date) => setSelectedEndDate(date)}
                                minDate={selectedStartDate || new Date()}
                                startDate={selectedStartDate}
                                endDate={selectedEndDate}
                                selectsEnd
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select End Date"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username:</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
                            <input
                                type="number"
                                id="mobileNumber"
                                className="form-control"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label " >Rent per Day:</label>
                            <div id='rentperday'>{rentPrice} INR</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Total Price:</label>
                            <div id='totalPrice'>{calculateTotalPrice()} INR</div>
                        </div>
                        <button type="submit" className="btn btn-primary" value="Book">Book</button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;