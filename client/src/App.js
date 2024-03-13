import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import UserData from "./Component/UserData";
import UpdateData from "./Component/UpdateData";
import BasicExample from "./Component/Direct";
import LoginScreen from "./LoginPage/LoginScreen";
import RegisterScreen from "./RegisterPage/RegisterScreen";
// import Home from "./Component/Homepage/Home";
import Room from "./Component/room";
import Owner1Data from "./Component/Owners1/OwnerData1";
import Owner2Data from "./Component/Owners1/OwnerData2";
import Update1Data from "./Component/Owners1/Owner1Update";
import GetOwnerData1 from "./Component/Owners1/GetOwnerData1";
import Owner3Data from "./Component/Owner3/OwnerData3";
import GetOwnerData3 from "./Component/Owner3/GetOwnerData3";
import { useState } from "react";
import Homedash from "./Component/admindashboard/Home";
import Sidebardash from "./Component/admindashboard/Sidebar";
import Headerdash from "./Component/admindashboard/Header";
import Rooms from "./Component/admindashboard/Rooms";
import Homedashcustomer from "./Component/CustomerDashboard/Home";
import Headerdashcustomer from "./Component/CustomerDashboard/Header";
import Sidebardashcustomer from "./Component/CustomerDashboard/Sidebar";
import Roomscustomer from "./Component/CustomerDashboard/johnhouserooms";
import BookingForm2 from "./Component/admindashboard/BookingForm2";
import BookingsDetails1 from "./Component/admindashboard/BookingsDetails1";
import Customers from "./Component/admindashboard/Customers";
// import Login from "./LoginPage/Login";
import BookingsDetails2 from "./Component/admindashboard/BookingsDetails2";
import UpdateRoom1 from "./Component/admindashboard/Updateroom";

import AndrewHouse1 from "./Component/AndrewHouse1";
import AndrewHouse2 from "./Component/AndrewHouse2";
import JohnHouse from "./Component/JohnHouse";
import AndrewHouse1RoomsCustomer from "./Component/CustomerDashboard/andrewhouse1rooms";
import AndrewHouse2RoomsCustomer from "./Component/CustomerDashboard/andrewhouse2rooms";
import JohnHouseRoomcustomer from "./Component/CustomerDashboard/johnhouserooms";



function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const handleSidebarToggle = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const [openSidebarcustomer, setOpenSidebarCustomer] = useState(false);

  const handleSidebarCustomer = () => {
    setOpenSidebarCustomer(!openSidebarcustomer);
  };
  return (
    <>
    {/* <Sidebar/> */}
      <BrowserRouter>
        <BasicExample />
        <Headerdash OpenSidebar={handleSidebarToggle} />
      <Sidebardash openSidebarToggle={openSidebarToggle} OpenSidebar={handleSidebarToggle} />
      <br></br>
        <Headerdashcustomer OpenSidebar={handleSidebarCustomer} />
      <Sidebardashcustomer openSidebarToggle={openSidebarcustomer} OpenSidebar={handleSidebarCustomer} />
      <Homedash />
        <Routes> 
          {/* <Route path="/Home" element={<Home />} /> */}
         <Route path="/room" element={<Room />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/reg" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/data" element={<UserData />} />
          <Route path="/update/:sid" element={<UpdateData />} />
          <Route path="/Owner1Update/:sid" element={<Update1Data />} />
          <Route path="/GetOwnerData1/:sid" element={<GetOwnerData1 />} />
          <Route path="/OwnerData1" element={<Owner1Data/>} />
          <Route path="/OwnerData2" element={<Owner2Data/>} />
          <Route path="/OwnerData3" element={<Owner3Data/>} />
          <Route path="/GetOwnerData3/:sid" element={<GetOwnerData3/>} />
          <Route path="/bookform" element={<BookingForm2/>}/>
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/dash" element={<Homedash/>}/>
          <Route path="/BookingsDetails1" element={<BookingsDetails1/>}/>
          <Route path="/BookingsDetails2" element={<BookingsDetails2/>}/>
          <Route path="/Customer" element={<Customers/>}/>
          <Route path="/roomscustomer" element={<Roomscustomer/>}/>
          <Route path="/andrewhouse1roomscustomer" element={<AndrewHouse1RoomsCustomer/>}/>
          <Route path="/andrewhouse2roomscustomer" element={<AndrewHouse2RoomsCustomer/>}/>
          <Route path="/johnhouseroomscustomer" element={<JohnHouseRoomcustomer/>}/>
          <Route path="/dashcustomer" element={<Homedashcustomer/>}/>
        </Routes>
    
      </BrowserRouter> 
      <AndrewHouse1/>
      <AndrewHouse2/>
      <JohnHouse/>
      {/* <BookingForm/> */}
      {/* <BookingForm2/> */}
      {/* <Villa2/> */}
      {/* <UpdateRoom1/> */}
      <div>
      
      {/* Add more components as needed */}
    </div>
      
     {/* <UpdateData/> */}
      {/* <Booking/> */}
      {/* <AkshayaVilla/>  */}
 {/* <AkshayaRoom/>   */}
{/* <Owner2Data/> */}
      {/* <BookingScreen/> */}
      {/* <Owner1Data/> */}
    </>
  );
}

export default App;
