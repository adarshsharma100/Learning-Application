import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Cards() {
  const [progress,setProgress] = useState(0);

  // Fetch progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem("completedChapters");
    if (savedProgress) {
      const totalChapters = 9; // Total chapters in the course
      const calculatedProgress = Math.round((JSON.parse(savedProgress) / totalChapters) * 100);
      setProgress(calculatedProgress);
    }
  }, []);

  return (
    <>
      <br />
      <div className="h1">
        <h1>ENJOY LEARNING COURSES</h1>
      </div>
      <br />

      
      {/* Course Cards */}
      <div className="course-container">
        <div className="course-box">
          <img src="images/c1.jpg" alt="Course Image" className="course-img" />
          <div className="course-info">
            <center>
              <h3>Personal Finance</h3>
            </center>
            <p className="rating">Rating: 4.6 (6695 Enrolled)</p>
            <br />
            <Link to={'/Per'} className="enroll-btn">
              Learn For Free
            </Link>
            
          </div>
        </div>

        {/* Additional Course Cards */}
        <div className="course-box">
          <img src="images/c2.jpg" alt="Course Image" className="course-img" />
          <div className="course-info">
            <center>
              <h3>Problem Solving</h3>
            </center>
            <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
            <br />
            <Link to="/problem-solving" className="enroll-btn">
              Learn For Free
            </Link>
          </div>
        </div>

        {/* Add the remaining course cards here... */}

        <div className="course-box">
          <img src="images/comm.jpg" alt="Course Image" className="course-img" />
          <div className="course-info">
            {/* Pogress */}
          <div
            className="progress-bar"
            style={{
              width: `${progress}%`,
              backgroundColor: '#4caf50',
              height: '10px',
              borderRadius: '5px',
              color:'black'
            }}
          ></div>
           {/* Pogress */}
          <br/>
          <p className='pro'>{progress}% Completed</p><br/>
            <center>
              <h3>Communication and Creativity</h3>
            </center>
            <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
            <Link to="/communication-creativity" className="enroll-btn">
              Learn For Free
            </Link>
          </div>
        </div>
        <div className="course-box">
      <img src="images/c4.jpg" alt="Course Image" className="course-img" />
      <div className="course-info">
        <center>
          {" "}
          <h3>Outdoors and Survival Skills</h3>
        </center>
        <p className="rating">Rating: 4.4 (3746 Enrolled)</p><br/>
        <Link to={'/out-door'} className="enroll-btn">
          Learn For Free
        </Link>
      </div>
    </div>
    <div className="course-box">
      <img src="images/response.jpg" alt="Course Image" className="course-img" />
      <div className="course-info">
        <center>
          {" "}
          <h3>Social Responsibilities</h3>
        </center>
        <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
        <Link to={'/social'} className="enroll-btn">
          Learn For Free
        </Link>
      </div>
    </div>
    <div className="course-box">
      <img src="images/tech.jpg" alt="Course Image" className="course-img" />
      <div className="course-info">
        <center>
          {" "}
          <h3>Technology</h3>
        </center>
        <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
        <Link to={'/techno'} className="enroll-btn">
          Learn For Free
        </Link>
      </div>
    </div>
    <div className="course-box">
      <img src="images/carr.jpg" alt="Course Image" className="course-img" />
      <div className="course-info">
        <center>
          {" "}
          <h3>Career Awareness</h3>
        </center>
        <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
        <Link to={'/awar'} className="enroll-btn">
          Learn For Free
        </Link>
      </div>
    </div>
    <div className="course-box">
      <img src="images/env.jpg" alt="Course Image" className="course-img" />
      <div className="course-info">
        <center>
          {" "}
          <h3>Environmental Awareness</h3>
        </center>
        <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
        <Link to={'/envi'} className="enroll-btn">
          Learn For Free
        </Link>
      </div>
    </div>
    <div className="course-box">
      <img src="images/cric.jpg" alt="Course Image" className="course-img" />
      <div className="course-info">
        <center>
          {" "}
          <h3>Critical Thinking</h3>
        </center>
        <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
        <Link to={'/cric'} className="enroll-btn">
          Learn For Free
        </Link>
      </div>
    </div>
    <div className="course-box">
      <img src="images/heal.jpg" alt="Course Image" className="course-img" />
      <div className="course-info">
        <center>
          {" "}
          <h3>Health and Awareness</h3>
        </center>
        <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
        <Link to={'/health'} className="enroll-btn">
          Learn For Free
        </Link>
      </div>
    </div>
    <div className="course-box">
      <img src="images/science.jpg" alt="Course Image" className="course-img" />
      <div className="course-info">
        <center>
          {" "}
          <h3>Everyday Science</h3>
        </center>
        <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
        <Link to={'/ever'} className="enroll-btn">
          Learn For Free
        </Link>
      </div>
    </div>
    <div className="course-box">
      <img src="images/cult.jpg" alt="Course Image" className="course-img" />
      <div className="course-info">
        <center>
          {" "}
          <h3>Cultural Awareness</h3>
        </center>
        <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
        <Link to={'/cult'} className="enroll-btn">
          Learn For Free
        </Link>
      </div>
    </div>
    <div className="course-box">
      <img src="images/c13.jpg" alt="Course Image" className="course-img" />
      <div className="course-info">
        <center>
          {" "}
          <h3>Digital Literacy</h3>
        </center>
        <p className="rating">Rating: 4.4 (3746 Enrolled)</p><br/>
        <Link to={'/digital'} className="enroll-btn">
          Learn For Free
        </Link>
      </div>
      
    </div>
    <div className="course-box">
      <img src="images/time.jpg" alt="Course Image" className="course-img" />
      <div className="course-info">
        <center>
          {" "}
          <h3>Time Management and Organisation</h3>
        </center>
        <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
        <Link to={'/time'} className="enroll-btn">
          Learn For Free
        </Link>
      </div>
      
    </div>
    <div className="course-box">
      <img src="images/c15.jpg" alt="Course Image" className="course-img" />
      <div className="course-info">
        <center>
          {" "}
          <h3>Media and Advertising Litracy</h3>
        </center>
        <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
        <Link to={'/media'} className="enroll-btn">
          Learn For Free
        </Link>
      </div>
      
    </div>
      </div>
    </>
  );
}

export default Cards;
