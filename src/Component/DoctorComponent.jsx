import React, { useEffect, useState } from "react";
import firebase from "../firebase"
import '../App.css'
export const DoctorComponent = () => {
  const [doctor,setDoctor] = useState([]);
  const [loading,setLoading] = useState(false);
  const ref = firebase.firestore().collection("docusers");
  function getDoctors(){
    setLoading(true);
    ref.onSnapshot((querySnapshot)=>{
      const items = [];
      querySnapshot.forEach((doc)=>{
        items.push(doc.data());
      });
      setDoctor(items);
      setLoading(false);
    })
  }
  useEffect(()=>{
    getDoctors();
  },[]);
  if(loading){
    return <h1>Loading....</h1>
  }
    return (
      
      
        <div style={{alignItems:'center'}}>
        <h1 style={{textAlign:"center"}}>
          Doctor's List
        </h1>
        {
          doctor.map((doc)=>(
            <center>
           <div style={{border:'2px solid black',width:'400px',margin:'20px'}} key={doc.Name}>
            <p style={{fontSize:'20px',fontWeight:'bold'}}>Name: {doc.Name}</p>
            <p>Email: {doc.Email}</p>
            <p>About: {doc.about}</p>
            <p>Phone: {doc.phoneNum}</p>
            <p>Specialization: {doc.specialization}</p>
          <p>Password: {doc.password}</p> 
         <p>Serving as: {doc.serving}</p>
            <p>Background: {doc.yourBackground}</p>
            <p>Location: {doc.location}</p>
            <p>PIN: {doc.pin}</p>
            <p>Majorly Consulted: {doc.majorlyConsulted}</p>
            <p>Weekly Appointments: {doc.weeklyAppointments}</p>
            <h4>Socials:</h4>
            <p>Facebook: {doc.facebook}</p>
            <p>Linkdin: {doc.linkdin}</p>
            <p>Instagram: {doc.instagram}</p>
            <p>Youtube: {doc.youtube}</p>

            </div>
            </center>
          ))}
  
        </div>
    );
}
