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
        console.log(data);
    }) 
  },[])


  return (
    <div>Courses</div>
  )
}

export default Courses