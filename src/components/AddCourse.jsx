import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const handleCourseAdd = () => {
    fetch("http://localhost:3000/admin/courses", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        imageLink: img,
        published: true,
      }),
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
    })
      .then((response) => response.json())
      .then(() => {
        window.alert("course created.")
      });
  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

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
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setImg(e.target.value);
            }}
            id="outlined-basic"
            label="ImageLink"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <Button onClick={handleCourseAdd}>Add Course</Button>
        </Card>
      </center>
    </div>
  );
};

export default AddCourse;
