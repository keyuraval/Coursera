import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppNavBar = () => {
  const navigate=useNavigate();
  const [userEmail,setUserEmail]=useState(null)

  useEffect(()=>{
    function callback2(data){
      if(data.username){
        setUserEmail(data.username)
      }
      // console.log(data);
    }
    function callback1(res){
      res.json().then(callback2)
    }
    fetch("http://localhost:3000/admin/me",{
      method:"GET",
      headers:{
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then(callback1)
  },[])

  if(userEmail){
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Typography>CodeCall</Typography>
      </div>
      <div>
        <div>{userEmail}</div>
        <Button onClick={()=>{
          localStorage.setItem("token",null);
          window.location="/"
      }}>Logout</Button>
      </div>
    </div>
  );
  }else{
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography>CodeCall</Typography>
        </div>
        <div>
          <Button onClick={()=>navigate("/signup")}>Signup</Button>
          <Button onClick={()=>navigate("/login")}>Login</Button>
        </div>
      </div>
    );
    
  }

};

export default AppNavBar;
