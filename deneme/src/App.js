import React, { useState } from 'react';
import Course from './Course';

function getRandomCourse(){
  const courseArray = ['Angular','Bootstrap','Ccsharp','KompleWeb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)];
}
function App() {
  const [courses, setcourses] = useState([])

  const handleClick = () =>{
    setcourses([...courses, getRandomCourse()])
  };

  const courseList = () =>{
    
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>
      {courses.map((course,index)=>{
        return <Course key={index} courseName={course}/>
      })  
      }
     
    </div>
  );
}

export default App;
