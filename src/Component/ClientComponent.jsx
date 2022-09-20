import React, { useEffect, useState } from "react";
import firebase from "../firebase"
import '../App.css'
export const ClientComponent = () => {
  const [client,setClient] = useState([]);
  const [loading,setLoading] = useState(false);
  const ref = firebase.firestore().collection("clientusers");
  function getClients(){
    setLoading(true);
    ref.onSnapshot((querySnapshot)=>{
      const clientItems = [];
      querySnapshot.forEach((doc)=>{
        clientItems.push(doc.data());
      });
      setClient(clientItems);
      setLoading(false);
    })
  }
  useEffect(()=>{
    getClients();
  },[]);
  if(loading){
    return <h1>Loading....</h1>
  }
    return (
      
      
        <div style={{alignItems:'center'}}>
        <h1 style={{textAlign:"center"}}>
          Client's List
        </h1>
        {
          client.map((doc)=>(
            <center>
           <div style={{border:'2px solid black',width:'400px',margin:'20px'}} key={doc.Name}>
            <p style={{fontSize:'20px',fontWeight:'bold'}}>Name: {doc.Name}</p>
            <p>Email: {doc.Email}</p>
            <p>Age: {doc.age}</p>
            <p>Password: {doc.password}</p>
            <p>Phone: {doc.phoneNum}</p>
   
         
           

            </div>
            </center>
          ))}
  
        </div>
    );
}
