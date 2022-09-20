import React, { useEffect, useState } from "react";
import firebase from "../firebase"
import '../App.css'
export const InternComponent = () => {
  const [intern,setIntern] = useState([]);
  const [loading,setLoading] = useState(false);
  const ref = firebase.firestore().collection("internusers");
  function getInterns(){
    setLoading(true);
    ref.onSnapshot((querySnapshot)=>{
      const internItems = [];
      querySnapshot.forEach((doc)=>{
        internItems.push(doc.data());
      });
      setIntern(internItems);
      setLoading(false);
    })
  }
  useEffect(()=>{
    getInterns();
  },[]);
  if(loading){
    return <h1>Loading....</h1>
  }
    return (
      
      
        <div style={{alignItems:'center'}}>
        <h1 style={{textAlign:"center"}}>
          Intern's List
        </h1>
        {
          intern.map((doc)=>(
            <center>
           <div style={{border:'2px solid black',width:'400px',margin:'20px'}} key={doc.Name}>
            <p style={{fontSize:'20px',fontWeight:'bold'}}>Name: {doc.Name}</p>
            <p>Email: {doc.Email}</p>
            <p>DOB: {doc.dob}</p>
            <p>About: {doc.currentEducation}</p>
            <p>Phone: {doc.phoneNum}</p>
            <p>Intern Category: {doc.internCategory }</p>
          <p>Password: {doc.password}</p> 
         
            <p>NPPD Expectation: {doc.nppdExpectation}</p>
            <p>Location: {doc.location}</p>
            
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
