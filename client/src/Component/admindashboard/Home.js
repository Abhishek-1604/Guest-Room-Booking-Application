import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';

function Homedash() {
    const [roomsCount, setRoomsCount] = useState(0);
    const [bookingcount, setBookingCount] = useState(0);
    const [customerscount, setCustomersCount] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:5000/app/rooms/getall")
            .then((res) => {
                console.log(res.data);
                setRoomsCount(res.data.length); 
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios.get("http://localhost:5000/app/booking/getall")
            .then((res) => {
                console.log(res.data);
                setBookingCount(res.data.length); 
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios.get("http://localhost:5000/app/v2/reg/getall")
            .then((res) => {
                console.log(res.data);
                setCustomersCount(res.data.length); 
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card' style={{backgroundColor:"blue"}}>
                    <div className='card-inner'>
                        <h3>ROOMS</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>{roomsCount}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>BOOKINGS</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>{bookingcount}</h1> {/* Placeholder for bookings count */}
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>{customerscount}</h1> {/* Placeholder for customers count */}
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>0</h1> {/* Placeholder for alerts count */}
                </div>
            </div>
          
        </div>
    );
}

export default Homedash;
