import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import ResponsiveDrawer from './BookingsDetails1'

function UpdateRoom1() {

    const {id}=useParams()

    const [image,setImage]= useState('');
    const [roomnumber,setRoomNumber]= useState("");
    const [floorsize,setFloorSize]= useState("");
    const [numberofbeds,setNumberOfBeds]= useState("");
    const [amenities,setAmenities]= useState("");

    useEffect(()=>{
        axios.get(`http://localhost:5000/app/rooms/${id}`)
        .then(res=>{
            // console.log(res.data);
            setImage(res.data.image)
            setRoomNumber(res.data.roomname);
            setFloorSize(res.data.floorsize)
            setNumberOfBeds(res.data.numberofbeds)
            setAmenities(res.data.amenities)
        })
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()

        let key={
            image:image,
            roomname:roomnumber,
            floorsize:floorsize,
            numberofbeds:numberofbeds,
            amenities:amenities

        };
        axios.patch(`http://localhost:5000/app/rooms/${id} `, key)
        .then(res=>{
            console.log(res);
            if(res.data.msg === "success"){
                alert('values are updated')
                window.location.assign('/jobs')
            }else{
                alert('values are not updated')
            }
        })

    }

  return (
   <>
   {/* <ResponsiveDrawer> */}
   <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='image' style={{ marginBottom: '8px', color: '#343a40' }}>Image:</label>
        <input type='file' id='image' onChange={(e) => setImage(e.target.value)} value={image} style={{ padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ced4da' }} />

        <label htmlFor='roomNumber' style={{ marginBottom: '8px', color: '#343a40' }}>Room Number:</label>
        <input type='number' id='roomNumber' onChange={(e) => setRoomNumber(e.target.value)} value={roomnumber} style={{ padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ced4da' }} />

        <label htmlFor='floorSize' style={{ marginBottom: '8px', color: '#343a40' }}>Floor Size:</label>
        <input type='number' id='floorSize' onChange={(e) => setFloorSize(e.target.value)} value={floorsize} style={{ padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ced4da' }} />

        <label htmlFor='numberOfBeds' style={{ marginBottom: '8px', color: '#343a40' }}>Number of Beds:</label>
        <input type='number' id='numberOfBeds' onChange={(e) => setNumberOfBeds(e.target.value)} value={numberofbeds} style={{ padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ced4da' }} />

        <label htmlFor='amenities' style={{ marginBottom: '8px', color: '#343a40' }}>Amenities:</label>
        <input type='text' id='amenities' onChange={(e) => setAmenities(e.target.value)} value={amenities} style={{ padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ced4da' }} />

        <input type='submit' value='Submit' style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px', cursor: 'pointer' }} />
    </form>
</div>



    {/* </ResponsiveDrawer> */}
   </>
  )
}

export default UpdateRoom1