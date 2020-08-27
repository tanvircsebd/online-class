import React,{ useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import fakeData from './components/FakeData/fakeCourses';
import Course from './components/course/Course';
import Cart from './components/cart/Cart';

function App() {
  const [courses,setCourses] = useState([]);
  const [addCourse,setAddCourse] = useState([]);

  useEffect(()=>{
    setCourses(fakeData.courses)
  },[])

  const handleCourse = (course)=>{
    const newCourse = [...addCourse,course]
    setAddCourse(newCourse);
  }
  console.log(addCourse);
  
  return (
    <div className="App">
      <Header></Header>
      <div className="col-md-12 m-auto">
      <div className="row">
          <div className="col-md-9 main-course">
            <Course Courses={courses} handleCourse={handleCourse}></Course>
          </div>
          <div className="col-md-3">
          <h2 className="text-center m-3 bg-secondary p-3 rounded">Course Enrolled</h2>
            <Cart addCourse={addCourse}></Cart>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
