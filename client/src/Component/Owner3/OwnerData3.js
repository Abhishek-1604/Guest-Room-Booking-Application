import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Owner3Data() {
    const [owner3, setOwner3] = useState([]);

    function del(a) {
        axios.delete(`http://localhost:7000/app/h3/${a}`)
            .then(res => {
                console.log(res.data);
                if (res.data.msg === 'deleted') {
                    alert("Deleted Successfully")

                }
                else {
                    alert("Data's are removed")
                }
            })
            .catch(error => {
                console.error("Error deleting room:", error);
                alert("An error occurred while deleting the room.");
            });
    }

    useEffect(
        () => {
            axios.get("http://localhost:7000/app/h3/getall")
                .then((res) => {
                    console.log(res.data);
                    setOwner3(res.data);
                })
        },
        []
    );

    return (
        <div>
            {
                owner3.map((e) => {
                    return (
                        
                        <div className="container-fluid row ">
                            <div className="container-fluid row bg-secondary col-10 m-5">
                                <div className="col-4 m-5 ">
                                    <img src={e.image} style={{ width: "100%" ,height:"100%"}} />
                                </div>
                                <div className="col-4 m-5 bg-light">
                                    <h1 className="m-5"> Room Details</h1>
                                    <b>
                                        <p>Room Name : {e.roomname}</p>
                                        <p>Floor Size : {e.floorsize}</p>
                                        <p>Number of Beds : {e.numberofbeds}</p>
                                        <p>Amenities : {e.amenities}</p>
                                    </b>
                                    <hr></hr>
                                    <div className="container-fluid row ">
                                        <div className="col-4 m-1 ">
                                            <Link to={`/update/${e._id}`} className="btn btn-success" >Update</Link>
                                        </div>
                                        <div className="col-4 m-1 ">
                                            <button className="btn btn-danger" onClick={() => del(e._id)} >Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Owner3Data;
