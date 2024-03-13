import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update1Data() {

  const { sid } = useParams();
  const nav = useNavigate();

  const [roomname, setRoomname] = useState("");
  const [floorsize, setFloorsize] = useState("");
  const [numberofbeds, setNumberofbeds] = useState("");
  const [amenities, setAmenities] = useState("");

  function PostData(e) {
    e.preventDefault();
    
    let key = {
      roomname: roomname,
      floorsize: floorsize,
      numberofbeds: numberofbeds,
      amenities:amenities
    };
    // console.log(key);

    axios.patch(`http://localhost:7000/app/rooms/${sid}`, key).then((res) => {
      console.log(res.data);
      if (res.data.msg === "updated") {
        alert("Values Updated");
        // nav("/data");
      } else {
        alert("Not Updated");
      }
    });
  }

  useEffect(() => {
    axios.get(`http://localhost:7000/app/rooms/${sid}`).then((res) => {
      console.log(res.data);
      setRoomname(res.data.roomname);
      setFloorsize(res.data.floorsize);
      setNumberofbeds(res.data.numberofbeds);
      setAmenities(res.data.amenities);
    });
  }, []);

  return (
    <>
      <form onSubmit={PostData}>
        <input
          type="text"
          value={roomname}
          onChange={(e) => setRoomname(e.target.value)}
          id="roomname"
        />
        <input
          type="number"
          value={floorsize}
          onChange={(e) => setFloorsize(e.target.value)}
          id="floorsize"
        />
        <input
          type="number"
          value={numberofbeds}
          onChange={(e) => setNumberofbeds(e.target.value)}
          id="numberofbeds"
        />
        <input
          type="text"
          value={amenities}
          onChange={(e) => setAmenities(e.target.value)}
          id="amenities"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Update1Data;
