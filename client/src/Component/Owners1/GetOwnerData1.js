import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function GetOwnerData1() {

    const nav =useNavigate()

  function PostData(e) {
    e.preventDefault();

    let roomname = document.getElementById("roomname").value;
    let floorsize = document.getElementById("floorsize").value;
    let numberofbeds = document.getElementById("numberofbeds").value;
    let amenities = document.getElementById("amenities").value;

    let key = {
      roomname: roomname,
      floorsize: floorsize,
      numberofbeds:numberofbeds,
      amenities:amenities
    };

    axios.post("http://localhost:7000/app/rooms/post", key).then((res) => {
      console.log(res.data);
      if (res.data.msg === "success") {
        alert("Values are submitted");
        // window.location.assign("/data");
        nav('/data')
      } else {
        alert("Values are not submitted");
      }
    });
  }

  return (
    <>
      <form onSubmit={PostData}>
        <input type="text" id="roomname" />
        <input type="number" id="floorsize" />
        <input type="number" id="numberofbeds" />
        <input type="text" id="amenities" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default GetOwnerData1;
