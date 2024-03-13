import {useState, useEffect} from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
  
    const isDatesFilled = checkInDate && checkOutDate;

    const todayDate = new Date().toISOString().split('T')[0];

    const handleCheckInChange = (e) => {
      const selectedDate = e.target.value;
      setCheckInDate(selectedDate);
      // Automatically set the checkout date to the next day
      const nextDate = new Date(selectedDate);
      nextDate.setDate(nextDate.getDate() + 1);
      setCheckOutDate(nextDate.toISOString().split('T')[0]);
  };

  const handleCheckOutChange = (event) => {
    const selectedCheckOutDate = new Date(event.target.value);
    const selectedCheckInDate = new Date(checkInDate);


    const maxSelectableDate = new Date(selectedCheckInDate);
    maxSelectableDate.setDate(selectedCheckInDate.getDate() + 1);

   
    if (selectedCheckOutDate >= selectedCheckInDate && selectedCheckOutDate <= maxSelectableDate) {
        setCheckOutDate(event.target.value);
    } else {
       
        setCheckOutDate(maxSelectableDate.toISOString().split('T')[0]);
    }
};
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Check if check-out date is not earlier than check-in date
      if (checkOutDate < checkInDate) {
        alert("Check-out date cannot be earlier than check-in date");
        return;
      }

      // Your other form submission logic goes here
      console.log('Check-in Date:', checkInDate);
      console.log('Check-out Date:', checkOutDate);
      // Add logic to send data to the server or perform other actions
    };
  return (
    <>
      <header className="headersd">
        <nav>
          <div className="nav__bar">
            <div className="logo">
              <a href="#">
              <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1408/yupiramos140801125/30843448-hotel-design-over-gray-background-vector-illustration.jpg?ver=6" alt="loading.." style={{ marginTop: "1cm", marginLeft: "1.3cm", width: "4cm", height: "3cm",borderRadius:"50%" }}></img><br />
              </a>
            </div>
            <div className="nav_menu_btn" id="menu-btn">
              <i className="ri-menu-line"></i>
            </div>
          </div>
          <ul className="nav__links" id="nav-links">
            <li><b><a href="#home">Home</a></b></li>
            <li><b><a href="#about">About</a></b></li>
            <li><b><a href="#service">Services</a></b></li>
            <li><b><a href="#explore">Restaurant</a></b></li>
            <li><b><a href="#contact">Contact</a></b></li>
          </ul>
          <div className='sundeep' style={{marginTop:"-0.3cm"}}>
          <Link to='/LoginCard'>
            <button style={{marginLeft:'-10%',cursor:'pointer',width:'100px',height:'40px',borderRadius:'8px',backgroundColor:'ButtonShadow',marginTop:"-2cm"}}>SignIn</button>
            </Link>
            </div>
            <div className='sundeep1'style={{marginTop:"-0.3cm"}}>
            <Link to='/RegistrationForm'>
            <button  style={{marginLeft:'-20%',cursor:'pointer',width:'100px',height:'40px',borderRadius:'8px',backgroundColor:'ButtonShadow',marginTop:"-2cm"}}>Register</button>
            </Link>
            </div>
        
        </nav>
       
      </header>

      <section className="section_container booking_container" style={{marginTop:"-1.7cm"}}>
            <form onSubmit={handleSubmit} className="booking__form">
                <div className="input__group">
                    <span><i className="ri-calendar-2-fill"></i></span>
                    <div>
                        <label htmlFor="check-in">CHECK-IN</label>
                        <input
                            type="date"
                            placeholder="Check In"
                            value={checkInDate}
                            min={todayDate} // Set minimum date to today
                            onChange={handleCheckInChange}
                        />
                    </div>
                </div>
                <div className="input__group">
                    <span><i className="ri-calendar-2-fill"></i></span>
                    <div>
                        <label htmlFor="check-out" style={{ marginLeft: '-0cm' }}>CHECK-OUT</label>
                        <input
                            type="date"
                            placeholder="Check Out"
                            style={{ marginRight: '9cm' }}
                            value={checkOutDate}
                            min={checkInDate} // Set minimum date to the selected check-in date
                            onChange={handleCheckOutChange}
                        />
                    </div>
                </div>

                <div className="input_group input_btn">
                    {isDatesFilled ? (
                        <Link to={'/Availability'}>
                            <button className="btn" style={{ marginRight: '4cm', color: "black" }}>Check Availability</button>
                        </Link>
                    ) : (
                        <button className="btn" style={{ marginRight: '4cm', color: "black" }} disabled>Check Availability</button>
                    )}
                </div>
            </form>
        </section>


      <section className="section_container about_container" id="about">
        <div className="about__image">
          <img src="https://wallpapercave.com/wp/wp1846068.jpg" alt="about" />
        </div>
        <div className="about__content"><br></br>
        <br></br>
          <p className="section__subheader" style={{marginLeft:"0.5cm"}}>ABOUT US</p>
          <h2 className="section__header" style={{marginLeft:"0.5cm"}}>The Best Holidays Start Here!</h2>
          <p className="section__description" style={{marginLeft:"0.5cm"}}>
          We are dedicated to providing travelers with quality accommodations, 
          personalized experiences, and seamless booking services.
          Our platform is committed to instilling confidence and excitement in every traveler, 
          ensuring that they embark on their dream holiday with ease. With a focus on excellence, 
          we strive to redefine the travel experience, making it not just a journey but a cherished memory.
          </p>
         
        </div>
      </section>
      <br></br>

      <section class="section_container room_container">
      <p class="section__subheader" style={{marginLeft:"0.5cm"}}>OUR LIVING ROOM</p>
      <h2 class="section__header" style={{marginLeft:"0.5cm"}}>The Most Memorable Rest Time Starts Here.</h2>
      <div class="room__grid">
        <div class="room__card">
          <div class="room_card_image">
          <img src="https://www.millenniumparkpanchgani.com/mobile/images/room/executive-suite-1.jpg" alt="room" height={300} />

          </div>
          <div class="room_card_details">
            <h4> Classic Deluxe</h4>
            <p>
              Bask in luxury with breathtaking ocean views from your private
              suite.
            </p>
            <h5>Starting from <span>Rs 4999/night</span></h5>
            <Link to='/Availability'>
            <button className="btn" style={{color:"whitesmoke"}}>Book Now</button>
            </Link>
          </div>
        </div>
        <div className="room__card">
          <div className="room_card_image">
          <img src="https://www.parkregisgoa.in/wp-content/uploads/2020/12/Junior-Suite-scaled.jpg" alt="room" height={300}/>

          </div>
          <div className="room_card_details">
            <h4>Premium Suite</h4>
            <p>
              Experience urban elegance and modern comfort in the heart of the
              city.
            </p>
            <h5>Starting from <span>Rs 9999/night</span></h5>
            <Link to='/Availability'>
            <button className="btn" style={{color:"whitesmoke"}}>Book Now</button>
            </Link>
          </div>
        </div>
        <div className="room__card">
          <div className="room_card_image">
          <img src="https://www.parkregisgoa.in/wp-content/uploads/2021/04/Presidential-Suite-2-2520x1400.jpg" alt="room" height={300}/>

          </div>
          <div class="room_card_details">
            <h4> Deluxe Suite</h4>
            <p>
              Spacious and inviting, perfect for creating cherished memories
              with loved ones.
            </p>
            <h5>Starting from <span>Rs 7999/night</span></h5>
            <Link to='/Availability'>
            <button className="btn" style={{color:"whitesmoke"}}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="service" id="service">
      <div className="section_container service_container">
        <div className="service__content">
          <p className="section__subheader">SERVICES</p>
          <h2 className="section__header">Strive Only For The Best.</h2>
          <ul className="service__list">
            <li>
              <span><i className="ri-shield-star-line"></i></span>
              High Class Security
            </li>
            <li>
              <span><i clclassNameass="ri-24-hours-line"></i></span>
              24 Hours Room Service
            </li>
            <li>
              <span><i className="ri-headphone-line"></i></span>
              Conference Room
            </li>
            <li>
              <span><i className="ri-map-2-line"></i></span>
              Tourist Guide Support
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section_container banner_container">
      <div className="banner__content">
        <div className="banner__card">
          <h4>25+</h4>
          <p>Properties Available</p>
        </div>
        <div className="banner__card">
          <h4>150+</h4>
          <p>Bookings Completed</p>
        </div>
        <div className="banner__card">
          <h4>130+</h4>
          <p>Happy Customers</p>
        </div>
      </div>
    </section>

    <section class="explore" id="explore"><br></br>
      <p class="section__subheader">Restaurant</p><br></br>
      <h2 class="section__header">Restaurant</h2>
      <div class="explore__bg">
        <div class="explore__content">
        <Link to={'/RegistrationForm'}>
        <button class="btn" style={{ color: 'black', background: 'wheat', width: '3.2cm', marginTop: '5cm', marginLeft: "4cm",fontSize:"larger" }}><b>Explore</b></button>
        </Link>
        </div>
      </div>
    </section>

    <footer class="footer" id="contact">     
       <div class="footer__col">
          <h3 style={{marginLeft:"17cm", marginTop:"1cm"}}>OUR SERVICES</h3><br/>
          <ul class="footer__links">
            <li style={{marginLeft:"16.4cm"}}><a href="#">Concierge Assistance</a></li>
            <li style={{marginLeft:"16.2cm"}}><a href="#">Flexible Booking Options</a></li>
            <li style={{marginLeft:"16.9cm"}}><a href="#">Airport Transfers</a></li>
            <li style={{marginLeft:"16.3cm"}}><a href="#">Wellness & Recreation</a></li>
          </ul>
        </div>
        <br></br><br/>
        <div class="footer__col">
          <h4 style={{marginLeft:"17.7cm"}}>CONTACT US</h4>
        
            <li style={{marginLeft:"15cm"}}><a href="#">anarghyacommunications@gmail.com</a></li>
            <li style={{marginLeft:"16.5cm"}}><a href="#">Call now : 9845612340</a></li>
         
        </div>
     
      <div class="footer__bar">
      © 2023-2024 Anarghya Communications. All Rights Reserved.
      </div>
    </footer>
    </>
  );
};

export default LandingPage;
