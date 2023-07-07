import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';

const courseMap = {
    Angular,
    Bootstrap,
    Ccsharp,
    Kompleweb
}

function Course({courseName}) {
//      console.log(courseName);
   console.log(courseMap[courseName]);   
     
     return ( 
  <div>
      <img src={courseMap[courseName]} alt="course"/>
  </div>
    );                                                                              
}

export default Course;