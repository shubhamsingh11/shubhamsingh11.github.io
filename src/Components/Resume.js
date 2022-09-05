import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      // var education = this.props.data.education.map(function(education){
      //   return <div key={education.school}><h3>{education.school}</h3>
      //   <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      //   <p className="info2">{education.description}</p></div>
      // })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p className="info2">{work.description}</p>
        </div>
      })
      // var skills = this.props.data.skills.map(function(skills){
      //   var className = skills.name.toLowerCase();
      //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      // })
      var skills = this.props.data.skills.map(function (skill) {
        var projectImage = 'images/technology/' + skill.image;
        return <div key={skill.name} className="columns img-skill">
          <img style={{ "height" : "150px", "width":"150px" }} className='skill' alt={skill.name} src={projectImage} />
          <h5 className="info4">{skill.name}</h5>
          <p className="info3">{skill.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>{skillmessage}</span></h1>
         </div>

        <div className="nine columns main-col ">
          <ul className="bgrid-thirds ">
                {skills}
          </ul>
            
			  </div>
      </div>
   </section>
    );
  }
}

export default Resume;

// <p>{skillmessage}
//             </p>

// 				<div className="bars">
// 				   <ul className="skills">
// 					  {skills}
// 					</ul>
// 				</div>
