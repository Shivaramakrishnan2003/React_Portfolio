import React from 'react'
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import "./Educationstyle.css"

function Education() {
  return (
    <div style={{backgroundColor:"rgb(50, 55, 60)", height:"94.5vh"}}>
       <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2021"
          iconStyle={{ background: "rgb(86, 157, 170)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jain Vidyalaya
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Class I - XII</h4>
          <p> AISSCE </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jain Vidyalaya
          </h3>
          <p> HSC </p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "rgb(86, 157, 170)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sri Krishna College of Engineering and Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Bachelor's Degree
          </h4>
          <p>Electronics and Communication Engineering</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Education