import { Card, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Courses = () => {
  const [courses,setCourses]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/admin/courses",{
        method:"GET",
        headers:{
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }).then(response=>response.json())
    .then(data=>{
        setCourses(data.courses)
    }) 
  },[]);


  return <div>
        Courses
        {courses.map(course=>{
            return <Course course={course}/>})}
    </div>
}

export function Course(props){ 
    return<Card style={{
        border:"2px solid black",
        margin:10,
        padding:10,
        width:300,
        minHeight:250
    }}>
        <Typography textAlign={"center"} variant='h4'>{props.course.title}</Typography><br/>
        <Typography textAlign={"center"} variant='h6'>{props.course.description}</Typography><br/>
        <Typography textAlign={"center"} variant='subtitle'>{props.course.price}</Typography><br/>
        <img src={props.course.imageLink}/>


    </Card>
}

export default Courses