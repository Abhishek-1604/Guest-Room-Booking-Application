import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";

function Room() {
    const [rooms, setRooms] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        axios.get("http://localhost:7000/app/rooms/getallrooms")
            .then((res) => {
                console.log(res.data);
                setRooms(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {rooms.map((room) => (
                <div key={room.id} className="row bs">
                    <div className="col-md-4  m-2">
                        <img src={room.imageurls} alt="Room" style={{ height: "200px" }} />
                    </div>
                    <div className="col-md-7 m-2">
                        <h1>{room.name}</h1>
                        <h5>Rent/day : {room.rentperday}</h5>
                        <b>
                            {" "}
                            <p>Max Count : {room.maxcount}</p>
                            <p>Phone Number : {room.phonenumber}</p>
                        </b>
                        <div style={{ float: "left" }}>
                            <Button variant="primary" onClick={handleShowModal}>
                                View Details
                            </Button>
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
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Room;
