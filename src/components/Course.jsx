import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Course = () => {
  let { courseID } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.courses);
      });
  }, []);

  let course = null;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == courseID) {
      course = courses[i];
    }
  }

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CourseCard course={course}></CourseCard>
      <UpdateCourse courses={courses} course={course} setCourses={setCourses}></UpdateCourse>
    </div>
  );
};

function UpdateCourse(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const course = props.course;

  return (
    <div>
      <center>
        <div style={{}}>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>
            Update course details
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
          <Button
            onClick={() => {
              fetch("http://localhost:3000/admin/courses/" + course.id, {
                method: "PUT",
                body: JSON.stringify({
                  title: title,
                  description: description,
                  price: price,
                  imageLink: img,
                  published: true,
                }),
                headers: {
                  "Content-type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              })
                .then((response) => response.json())
                .then(() => {
                  let updatedCourses=[];
                  for(let i=0;i<props.courses.length;i++){
                    if(props.courses[i].id==course.id){
                        updatedCourses.push({
                            id:course.id,
                            title:title,
                            description:description,
                            price:price,
                            imageLink:img
                        })
                    }else{
                        updatedCourses.push(props.courses[i])
                    }
                  }
                  props.setCourses(updatedCourses);
                });
            }}
          >
            Update Course
          </Button>
        </Card>
      </center>
    </div>
  );
}
function CourseCard(props) {
  const course = props.course;
  return (
    <div>
      <Card
        style={{
          border: "2px solid black",
          margin: 10,
          padding: 10,
          width: 300,
          minHeight: 250,
        }}
      >
        <Typography textAlign={"center"} variant="h4">
          {course.title}
        </Typography>
        <br />
        <Typography textAlign={"center"} variant="h6">
          {course.description}
        </Typography>
        <br />
        <Typography textAlign={"center"} variant="subtitle">
          {course.price}
        </Typography>
        <br />
        <img src={course.imageLink} />
      </Card>
    </div>
  );
}

export default Course;
