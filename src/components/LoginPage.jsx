import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const LoginPage = () => {

const handleLogin=()=>{
        fetch("http://localhost:3000/admin/login",{
            method:"POST",
            body:JSON.stringify({
                username:email,
                password:password
            }),
            headers:{
              "Content-type":"application/json"
          }
        }).then(response=>response.json())
        .then(data=>{
          const token=data.token;
          localStorage.setItem("token",token)
        })
}
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

  return (
    <div>
      <center>
        <div style={{}}>
          <Typography
            variant="h6"
            style={{ marginTop: "150px", marginBottom: "10px" }}
          >
            Welcome to CodeCall
          </Typography>
        </div>
      </center>
      <center>
        <Card variant="outlined" style={{ width: "300px", padding: "30px" }}>
          <TextField
          onChange={(e)=>{
            setEmail(e.target.value)
        }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <TextField
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <Button onClick={handleLogin}>Login</Button>
        </Card>
      </center>
    </div>
  );
};

export default LoginPage;
