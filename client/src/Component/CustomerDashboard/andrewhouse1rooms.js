import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function AndrewHouse1RoomsCustomer() {
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
    function PostData (e) {
        e.preventDefault();
        let Email = document.getElementById("email").value;
    
        let key ={
          email:Email
        };
    
        axios.post("http://localhost:5000/app/subscribe/post", key)
        .then((res)=>{
           console.log(res.data);
           if(res.data.msg === "Success"){
            alert("Subscribe Successfully");
            navigator('/subscribe')
           }else{
            alert("Not subscribed");
           }
        });
      }
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

                    <Link to='/bookform'><button style={{backgroundColor:"blue",color:"white" ,borderRadius:"30px"}}>Book Now</button></Link>
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
<footer style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '40px 0',
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
              <div style={{
                flexBasis: '250px',
                margin: '10px',
              }}>
                <h3>Contact Us</h3>
                <p>Email: abhiabhi161604@gmail.com</p>
                <p>Phone: +91 6366504523</p>
              </div>
              <div style={{
                flexBasis: '250px',
                margin: '10px',
              }}>
                <h3>FAQ</h3>
                <ul>
                  <li>How to book a room?</li>
                  <li>What are the payment options?</li>
                  <li>Do you offer discounts?</li>
                </ul>
              </div>
              <div style={{
                flexBasis: '250px',
                margin: '10px',
              }}>
                <h3>Location</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.411632621887!2d77.59317017454617!3d12.945491215451298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c7e43508d9%3A0x55c058955d3f3ea0!2sBrand%20Factory%202%20Wheeler%20Parking!5e0!3m2!1sen!2sin!4v1710306925309!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div style={{
                flexBasis: '250px',
                margin: '10px',
              }}>
                <h3>Subscribe</h3>
                <p>Stay updated with our latest offers</p>
                <form onSubmit={PostData}>
                  <input type="email" id="email" autoComplete='email' placeholder="Enter your email" />

                  <input type="submit" value="Subscribe"className="btn btn-outline-success" />
                </form>
                {/* <form onSubmit={handleSubmit} className="subscribe-form">
            <input type="email" placeholder="Enter your email" autoComplete='email'
             value={email}
             onChange={handleChange}
             disabled={submitting}
             style={{
              width: '100%',
              padding: '8px',
             
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }} />
            <button style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              
            }}disabled={submitting} >{submitting ? "Submitting..." : "Submit"}</button>
            </form> */}
              </div>
            </div>
          </footer>
          <footer style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0", marginTop: "auto", textAlign: "center" }}>
              <p>&copy; 2024 Guest Room Booking</p>
              <p>Contact us: abhiabhi161604@gmail.com</p>
            </div>
          </footer>
</>
  )
}

export default AndrewHouse1RoomsCustomer