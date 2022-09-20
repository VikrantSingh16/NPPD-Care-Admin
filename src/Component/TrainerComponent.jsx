import React, { useEffect, useState } from "react";
import firebase from "../firebase"
import '../App.css'
export const TrainerComponent = () => {
  const [trainer,setTrainer] = useState([]);
  const [loading,setLoading] = useState(false);
  const ref = firebase.firestore().collection("trainerusers");
  function getTrainers(){
    setLoading(true);
    ref.onSnapshot((querySnapshot)=>{
      const trainerItems = [];
      querySnapshot.forEach((doc)=>{
        trainerItems.push(doc.data());
      });
      setTrainer(trainerItems);
      setLoading(false);
    })
  }
  useEffect(()=>{
    getTrainers();
  },[]);
  if(loading){
    return <h1>Loading....</h1>
  }
    return (
      
      
        <div style={{alignItems:'center'}}>
        <h1 style={{textAlign:"center"}}>
          Trainer's List
        </h1>
        {
          trainer.map((doc)=>(
            <center>
           <div style={{border:'2px solid black',width:'400px',margin:'20px'}} key={doc.Name}>
            <p style={{fontSize:'20px',fontWeight:'bold'}}>Name: {doc.Name}</p>
            <p>Email: {doc.Email}</p>
            <p>About: {doc.about}</p>
            <p>Phone: {doc.phoneNum}</p>
            <p>Specialization: {doc.specialization}</p>
          <p>Password: {doc.password}</p> 
         <p>Serving as: {doc.serving}</p>
            
            <p>Location: {doc.location}</p>
            <p>PIN: {doc.pin}</p>
            <p>Majorly Consulted: {doc.majorlyConsulted}</p>
            <p>Weekly Appointments: {doc.weeklyAppointments}</p>
            <h4>Socials:</h4>
            <p>Facebook: {doc.facebook}</p>
            <p>Linkdin: {doc.linkdin}</p>
            <p>Instagram: {doc.instagram}</p>
            <p>Youtube: {doc.youtube}</p>
<p>NPPD Expectation: {doc.nppdExpectation}</p>
            </div>
            </center>
          ))}
  
        </div>
    );
}
