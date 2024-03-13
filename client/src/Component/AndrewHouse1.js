import axios from "axios";
import { Modal, Button, Carousel } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { faBath, faBed, faBowlFood, faBusinessTime, faCircleInfo, faCoffee, faDog, faDumbbell, faHandsWash, faHouse, faLock, faMoneyBill1Wave, faParking, faPeopleGroup, faSwimmer, faTv, faWheelchairAlt, faWifi, faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function AndrewHouse1() {
  // const navigate = useNavigate();
  const [room, setRoom] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (room) => {
    setSelectedRoom(room);
    setShow(true);
  };

  useEffect(() => {
    try {
      axios.get('http://localhost:5000/app/rooms/getall')
        .then((res) => {
          setRoom(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);
  

  return (
    <>
    
    <div>

      {room.map((val, ind) => {
        return (
          <div key={ind} className="row bs">
            <div className="col-5 m-5 col-md-4 m-5">
              <img src={val.image} style={{ width: "100%" }} alt={`Room ${val.roomname}`} />
            </div>
            <div className="col-5 col-md-5 m-5">
              <h1>Room : {val.roomnumber}</h1>
              <b>
                <p>Floor Size: {val.floorsize}</p>
                <p>Number of Beds: {val.numberofbeds}</p>
                <p>Amenities: <mark>{val.amenities}</mark></p>
              </b>
              <Button variant="primary" onClick={() => handleShow(val)}>
                Launch demo modal
              </Button>
            </div>
          </div>
        );
      })}
      {selectedRoom && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
              {selectedRoom.image1 && (
                <Carousel.Item>
                  <img src={selectedRoom.image1} style={{ height: "400px" }} alt="Image 1" />
                  <p>{selectedRoom.description}</p>
                </Carousel.Item>
              )}
              {selectedRoom.image2 && (
                <Carousel.Item>
                  <img src={selectedRoom.image2} style={{ height: "400px" }} alt="Image 2" />
                  <p>{selectedRoom.description}</p>
                </Carousel.Item>
              )}
              {selectedRoom.image3 && (
                <Carousel.Item>
                  <img src={selectedRoom.image3} style={{ height: "400px" }} alt="Image 3" />
                  <p>{selectedRoom.description}</p>
                </Carousel.Item>
              )}
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <div class="col-lg-10 col-md-6 col-sm-10 m-5">
       <p>Location</p>
    <div class="embed-responsive embed-responsive-16by9">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7969.119831155837!2d77.5967652387537!3d12.958375936819884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c4db07dfdd%3A0x5ca48a0f991ef520!2sShanti%20Nagar%20Bus%20Terminus!5e0!3m2!1sen!2sin!4v1710323344579!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{width:"100%",height:"400px"}}></iframe>
    </div>
</div>

<div className='container-fluid row'>
          <h1 style={{ textAlign: "center", color: "green" }}>Facilities of AndrewHouse1 </h1>
          <div className="row">
            <div className='col-1  m-4 '>
              <h6><FontAwesomeIcon icon={faWifi} style={{ color: "green" }} ></FontAwesomeIcon><p>Free Wifi </p></h6>
            </div>
            <div className='col-1 m-4 p-2'>
              <h6> <FontAwesomeIcon icon={faSwimmer} style={{ color: "green" }} ></FontAwesomeIcon><p>Outdoor Swimming pool</p></h6>
            </div>
            <div className='col-1 m-4 p-2'>
              <h6> <FontAwesomeIcon icon={faPeopleGroup} style={{ color: "green" }} ></FontAwesomeIcon><p>Family rooms</p></h6>
            </div>
            <div className='col-1 m-4 p-2'>
              <h6> <FontAwesomeIcon icon={faDumbbell} style={{ color: "green" }}  ></FontAwesomeIcon><p>Fitness center</p></h6>
            </div>
            <div className='col-1 m-4 p-2'>
              <h6> <FontAwesomeIcon icon={faParking} style={{ color: "green" }} ></FontAwesomeIcon><p>Free Parking</p></h6>
            </div>
            <div className='col-1 m-4 p-2'>
              <h6> <FontAwesomeIcon icon={faBowlFood} style={{ color: "green" }} ></FontAwesomeIcon><p>Restaurant</p></h6>
            </div>
            <div className='col-1 m-4 p-2'>
              <h6> <FontAwesomeIcon icon={faCoffee} style={{ color: "green" }} ></FontAwesomeIcon><p>Tea/Coffee Maker in All Rooms</p></h6>
            </div>
            
          </div>
          

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
            <input type="email" placeholder="Enter your email" autoComplete='email'
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
            }}>Subscribe</button>
          </div>
        </div>
      </footer>
      <footer style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0", marginTop: "auto", textAlign: "center" }}>
          <p>&copy; 2024 Guest Room Booking</p>
          <p>Contact us: abhiabhi161604@gmail.com</p>
        </div>
      </footer>
      </div>
    </>
  );
}

export default AndrewHouse1;
