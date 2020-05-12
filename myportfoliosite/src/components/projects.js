import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activaTab: 0 };
    }

    toggleCategories() {
        if(this.state.activaTab === 0) {
            return(
                // project 1
            <div  className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Skills Learning Application</CardTitle>
                    <CardText>
                    This Application is a search engine and resource place for users who want to learn new skills. It will use a youtube API to display a "how to" video of the skill and also a wiki API to show the definition of the skill and the history of it. 
                    <hr/>
                    Tools/languages used: JavaScript, CSS, jQuery, Foundation library
                    </CardText>
                    <CardActions border>
                    <a  className ="social-link" href="https://github.com/brakluner/SkillLearningApp" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true"></i>
                    </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            </div>
            )
        } else if (this.state.activaTab === 1) {
            return (
                // project 2
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Covid-19 Application</CardTitle>
                    <CardText>
                    The idea to this Application came at a time when the world was expriencing the CoronaVirus Epidemic and We developed this to help users find resources. The Application provides real-time data on how the Covid-19 virus is affecting certain locations. It then gives users a forum to post places to find certian resources that others can't find.  
                    <hr/>
                    Tools/languages used: Express, NodeJS, mySQL database,Travis CI, ProjectBoard
                    </CardText>
                    <CardActions border>
                    <a  className ="social-link" href="https://github.com/bjork1/covid-19" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true"></i>
                    </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activaTab === 2) {
            return (
                // project 3
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>AudioMind Application</CardTitle>
                    <CardText>
                            
                    </CardText>
                    <CardActions border>
                    <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        }
    }
    
    render() {
        return(
        <div className="catagory-tabs">
            <Tabs activaTab={this.state.activaTab} onChange={(tabId) => this.setState({ activaTab: tabId })} ripple>
                <Tab>Project 1</Tab>
                <Tab>Project 2</Tab>
                <Tab>Project 3</Tab>
                <Tab></Tab>
            </Tabs>

           
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
           
        </div>
        )
      
    }
}

export default Projects;