import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';

function Homedashcustomer() {
    const [roomsCount, setRoomsCount] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:7000/app/rooms/getallrooms")
            .then((res) => {
                console.log(res.data);
                setRoomsCount(res.data.length); // Assuming the response is an array of rooms
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
                    <p>{roomsCount}</p>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>BOOKINGS</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>12</h1> {/* Placeholder for bookings count */}
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>33</h1> {/* Placeholder for customers count */}
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

export default Homedashcustomer;
