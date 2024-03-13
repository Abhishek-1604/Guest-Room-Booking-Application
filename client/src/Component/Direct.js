import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
// import {useHistory} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css'

function BasicExample() {
  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    // Perform any necessary logic here
    // For example, form validation, data processing, etc.


    // Navigate to PageTwo
    // history.push('/AkshayaVilla');
    navigate('/AkshayaVilla');
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand href="#home"><img src='https://seeklogo.com/images/B/be-my-guest-logo-9689B38FD7-seeklogo.com.png' id='logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/Home'>Home</Nav.Link>
              {/* <Nav.Link as={Link} to='/room'>Room</Nav.Link> */}
              {/* <Nav.Link as={Link} to='/Booking'>Booking</Nav.Link> */}
              <Nav.Link as={Link} to='/login'>Log in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src="https://images7.alphacoders.com/462/thumb-1920-462294.jpg" class="d-block w-100" alt="..." style={{ height: "500px" }} />
            {/* <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://th.bing.com/th/id/R.ff6758896def2979225597ebdbd89eda?rik=ErPpBOnkFHHAgA&riu=http%3a%2f%2fwww.architecturebeast.com%2fwp-content%2fuploads%2f2014%2f08%2fTop_50_Modern_House_Designs_Ever_Built_featured_on_architecture_beast_52.jpg&ehk=wTKZwsAQAziIsasn4qIC2bQIHbbZkQg5MeTtUmPSNVg%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" style={{ height: "500px" }} alt="..." />
            {/* <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://wallpaperaccess.com/full/3434347.jpg" class="d-block w-100" alt="..." style={{ height: "500px" }} />
            {/* <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container-fluid " style={{ justifyContent: "center" }}>
        <div class="row m-5">
          <div class="col-xsm-10 col-lg-5 m-3">
            <div class="card" >
              <img src="https://i.pinimg.com/originals/95/29/91/952991594aa478fa2232553e4eb8757d.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Andrew House1</h5>
                <p class="card-text">Welcome to Andrew House1! Our cozy and comfortable rooms are designed to provide you with a relaxing stay. Whether you're traveling for business or pleasure, our friendly staff is dedicated to ensuring your comfort and satisfaction. Explore nearby attractions or simply unwind in the comfort of your room. We look forward to welcoming you!</p>
                <a href="" class="btn btn-outline-secondary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-xsm-10 col-lg-5 m-3">
            <div class="card" >
              <img src="https://wallpaperaccess.com/full/3922236.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Andrew House2</h5>
                <p class="card-text">Welcome to Andrew House2! Our accommodations offer comfort and convenience for your stay. With spacious rooms and modern amenities, we strive to make your experience memorable. Whether you're here for business or leisure, our friendly staff is here to assist you. Explore our facilities and make the most of your stay with us.</p>
                <a href="" class="btn btn-outline-secondary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-xsm-10 col-lg-5 m-3">
            <div class="card" >
              <img src="https://i.imgur.com/mPeRpbq.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">John</h5>
                <p class="card-text">Welcome to John's cozy house located in the beautiful city of Coimbatore. Situated in a peaceful neighborhood, John's house offers a comfortable and homely environment for your stay.</p>
                <button className="btn btn-outline-secondary" onClick={handleSubmit}>Show More</button>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="map">
      
            
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

    </>

  );
}

export default BasicExample;

