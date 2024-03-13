import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'

function Rooms() {
    const [rooms, setRooms] = useState([]);
    // const [showModal, setShowModal] = useState(false);

    // const handleCloseModal = () => setShowModal(false);
    // const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        axios.get("http://localhost:5000/app/rooms/getall")
            .then((res) => {
                console.log(res.data);
                setRooms(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const handleDeleteBooking = (id) => {
        axios.delete(`http://localhost:5000/app/rooms/${id}`)
          .then((res) => {
            console.log(res.data);
            // Filter out the deleted booking from the state
            setRooms(rooms.filter(rooms => rooms._id !== id));
          })
          .catch((error) => {
            console.error('Error deleting booking:', error);
          });
      };
  return (
    <>
    <div>
    {rooms.map((room) => (
        <div key={room.id} className="row bs">
            <div className="col-md-4 col-5 m-5">
                <img src={room.image} alt="Room" style={{  width:"100%" }} />
            </div>
            <div className="col-md-5 col-5 m-5">
                <h1>Room  : {room.roomname}</h1>
                <h5>floor size : {room.floorsize}</h5>
                <b>
                    {" "}
                    <p>Number of Beds : {room.numberofbeds}</p>
                    <p>Amenities : {room.amenities}</p>
                </b>
                <div style={{ float: "left" }}>
                    {/* <Button variant="primary" onClick={handleShowModal}>
                        View Details
                    </Button> */}
                </div>
                {/* <Modal show={showModal} onHide={handleCloseModal} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>{room.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel>
                            {room.imageurls.map(url => {
                                return <Carousel.Item>
                                    <img className="d-block w-100 bigimg" src={url} />

                                </Carousel.Item>
                            })}
                        </Carousel>
                        <p>{room.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> */}
                <button className="btn btn-danger" onClick={() => handleDeleteBooking(room._id)}>Delete</button>
            </div>
        </div>
    ))}
</div>

</>
  )
}

export default Rooms