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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <hr style={{borderTop: '3px solid blue', width: '50%'}}/>
                <h5>Address</h5>
                <p>1255 County Road D Saint Paul, MN 55109</p>
                <h5>Phone</h5>
                <p>612-735-1533</p>
                <h5>Email</h5>
                <p>abdullahis0709@outlook.com</p>
                <hr style={{borderTop: '3px solid blue', width: '50%'}}/>

               </Cell>
               <Cell className= "resume-right-column" col={8}>
                    <h2>Education</h2>

                    <Education
                        startYear= {2019}
                        endYear = {2020}
                        schoolName = "University of Minnesota BootCamp"
                        schoolDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    
                    <Education
                        startYear= {2014}
                        endYear = {2018}
                        schoolName = "University of Wiscosin Stout"
                        schoolDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    <hr style={{borderTop: '3px solid white'}}/>

                    <h2>Exprience</h2>

                        <Experince
                            startYear = {2019}
                            endYear = {"current"}
                            jobName = "Apple"
                            jobDescription = "Techincal specalist"
                            />
                    <hr style={{borderTop: '3px solid white'}}/>

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