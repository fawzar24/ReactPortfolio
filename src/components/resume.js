import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experince from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return(
        <div>
           <Grid>
               <Cell col={4}>
                   <div style={{textAlign: 'center'}}>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                   </div>

                <h2 style={{paddingTop: '2em'}}>Salahuddin Abdullahi</h2>
                <h4 style={{color: 'grey'}}>Programmer</h4>
                <hr style={{borderTop: '3px solid blue', width: '50%'}}/>
                <p>I am a Full Stack Web Developer with a background in BioChemistry but found Joy in programing and writing applications that affect and improve people’s lives. I currently work at Apple as Technical Specialist providing hardware/software support to customers, but I recently decided to earn a Full stack Developer certification from the University of Minnesota.

                    I Effectively combined my creativity and problem solving skills to develop user-friendly applications. I worked with my teammates on projects to develop working and user friendly application with limited time, testing our ingenuity, and effective communication skills.  

                    In my off time I love watching the NBA, working out, and spending time with my family. </p>
                <hr style={{borderTop: '3px solid blue', width: '50%'}}/>
                <h5>Address</h5>
                <p>1255 County Road D Saint Paul, MN 55109</p>
                <h5>Phone</h5>
                <p>612-735-1533</p>
                <h5>Email</h5>
                <p>sabdullahi0709@outlook.com</p>
                <hr style={{borderTop: '3px solid blue', width: '50%'}}/>

               </Cell>
               <Cell className= "resume-right-column" col={8}>
                    <h2>Education</h2>

                    <Education
                        startYear= {2019}
                        endYear = {2020}
                        schoolName = "University of Minnesota BootCamp"
                        schoolDescription = "A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, and ReactJS."
                        />
                    
                    <Education
                        startYear= {2014}
                        endYear = {2018}
                        schoolName = "University of Wiscosin Stout"
                        schoolDescription = "Completed a 4 year degree in applied science with knowledge in math, logical computation, chemistry and biology. Developed laboratory techniques like protein assay, western blotting, cell culture, chromatography, and statistics"
                        />
                    <hr style={{borderTop: '5px solid white'}}/>

                    <h2>Exprience</h2>

                        <Experince
                            startYear = {2019}
                            endYear = {"current"}
                            jobName = "Apple"
                            jobTitle = "Techincal specalist"
                            jobDescription="
                            Provide technical support to customer via face to face interaction, 
                            Ran Diagnostics on varies apple device including iPhones, iPad, Apple Watch etc
                            Perform repairs on devices when needed
                            Write thorough notes and procedures on my finding and resolutions 
                            Use MG to debug issues and log customer information 
                            Communicate effectively and with empathy on findings with customer
                            Expected to service 3 customers an hour in a fast paced environment
                            Developed the ability to multi-task and be organized.
                            "
                            />

                        <Experince
                            startYear = {2014}
                            endYear = {"2018"}
                            jobName = "University of Wisconsin stout technology helpdesk"
                            jobTitle = "Technical Support"
                            jobDescription="
                            Provide technical support to students on campus 
                            Provide loaner laptops to individuals 
                            Assist student backup their data
                            Install software on devices 
                            Able to communicate effectively to students about their device
                            "
                            />    

                    <hr style={{borderTop: '5px solid white'}}/>

                    <h2>Skills</h2>
                    <Skills
                        skill="JavaScript"
                        progress={80}
                        />
                    <Skills
                        skill="HTML/CSS"
                        progress={90}
                        />
                    <Skills
                        skill="Express/NodeJS"
                        progress={50}
                        />
                    <Skills
                        skill="MongoDB"
                        progress={80}
                        />
                    <Skills
                        skill="React"
                        progress={70}
                        />

               </Cell>
           </Grid>
        </div>
        )
      
    }
}

export default Resume;