import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { getUsers } from '../Services/service'
import CardContent from '@material-ui/core/CardContent';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import getUserData from '../Services/service'
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pm: [],
            Org_lead: [],
            external_user: [],
            data: {
                "pm": [
                    {
                        name: "Windows ",
                        id: "1"
                    },
                    {
                        name: "Linux",
                        id: "2"
                    },
                    {
                        name: "Linux",
                        id: "3"
                    }
                ],
                "Org_lead": [
                    {
                        name: "Chrome",
                        id: 1
                    },
                    {
                        name: "firefox",
                        id: "2"
                    }
                ],
                "User": [
                    {
                        name: "STS",
                        id: "1"
                    },
                    {
                        name: "Eclipse",
                        id: "2"
                    }
                ]
            }
        }

    }



    async componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        console.log("get all users");
        // getUserData().then((res) => {
        //     console.log("in getuserdata ", res);
        //     this.setState({
        //         pm: res.pm,
        //         Org_lead: res.Org_lead,
        //         external_user: res.User
        //     })
        //     console.log(this.state.pm)
        //     console.log(this.state.Org_lead)
        //     console.log(this.state.User)
        // }
        // )
        this.setState({
            pm: this.state.data.pm,
            Org_lead: this.state.data.Org_lead,
            external_user: this.state.data.User
        })

    }
    userRegistationPage = () => {
        this.props.history.push('/userRegistration')
    }
    render() {
        let project_manager = this.state.pm.map((key) => {
            return (
                key === null ? '' : < div key={key.id} >
                    {key.name}
                </div>)
        })
        let org_lead = this.state.Org_lead.map((key) => {
            return (
                key === null ? '' : < div key={key.id} >
                    {key.name}
                </div>)
        })
        let users = this.state.external_user.map((key) => {
            return (
                key === null ? '' : < div key={key.id} >
                    {key.name}
                </div>)
        })
        return (
            <div>
                <AppBar position="absolute" >
                    <Toolbar>
                        <Typography variant="h4" className='title' >
                            Manage Your Project
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="page">
                    <Card className="cardView">
                        <div className="allThreeElements">
                            <div className="card">
                                <div className="add-heading">
                                    Project Manager
                </div>
                                <div className="project_manager">
                                    {project_manager}
                                </div>
                            </div>
                            <div className="card">
                                <div className="add-heading">
                                    Organisation Lead
                </div>
                                <div className="org_lead">
                                    {org_lead}
                                </div >
                            </div>
                            <div className="card">
                                <div className="add-heading">
                                    User
                </div>
                                <div className="users">
                                    {users}
                                </div>
                            </div>
                        </div>
                        <div className="addUserButton">
                            <Button variant="primary" justifyContent='flex-end' onClick={this.userRegistationPage}>Add user</Button>
                        </div>
                    </Card>
                </div>
                {/* {user} */}
            </div>
        )
    }
}
export default withRouter(Admin)