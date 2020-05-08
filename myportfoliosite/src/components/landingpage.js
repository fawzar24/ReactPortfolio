import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                        src= "https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>

                        <hr/>
                        <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB | mySQL</p>
                        
                        <div className="social-links"> 
                            {/* Linkedin */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                            {/* Github */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>  
        </div>
        )
    }
}

export default Landing;