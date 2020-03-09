import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { getAllProducts } from '../Services/Services'
import { Paper } from '@material-ui/core';
import { addUser } from '../Services/Services'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

class UserRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            product: [],
            value: '',
            checked: [],
            checkedItems: [],
            roleId: '',
            openDialog: false

        }
        //this.handleChange = this.handleChange.bind(this);

    }
    onChange = (e) => {
        const checkedItems = this.state.checkedItems
        let position
        if (e.target.checked) {
            checkedItems.push(+e.target.value)
        } else {

            position = checkedItems.indexOf(+e.target.value)
            checkedItems.splice(position, 1)
        }



        this.setState({
            checkedItems: checkedItems
        })
        console.log(this.state.checkedItems)
    }
    componentDidMount() {
        this.getAllTheProducts();

    }

    getAllTheProducts = () => {
        getAllProducts().then((res) => {
            console.log("in getNotes ", res.clone().json())
            return res.json()
        }).then((data) => {
            console.log(data)
            this.setState({
                product: data
            })
            console.log('data---->', this.state.product)
        }
        )
    }
    onChangeUserName = (event) => {
        var name = event.target.value;
        this.setState({
            userName: name,

        })
        // console.log(this.state.userName)
    }

    onChangeEmail = (event) => {
        var emailId = event.target.value;
        this.setState({
            email: emailId,

        })

    }
    onChangePassword = (event) => {
        var userPassword = event.target.value;
        this.setState({
            password: userPassword,

        })

    }

    handleChangeCheckBox = (event) => {
        this.setState = {
            checked: event.target.value
        }
    }
    handleProductData = () => {

    }
    saveData = () => {
        const userRegister = {
            "username": this.state.userName,

            "email": this.state.email,

            "password": this.state.password,

            "role_id": this.state.roleId,

            "product_id_list": this.state.checkedItems,

            "token": ''

        }
        //  console.log("register", userRegistesr)
        addUser(this.state.userName,this.state.email,this.state.password,this.state.roleId,this.state.checkedItems).then((res) => {
            console.log("data", res.clone().json())
            this.props.history.push('/Admin')
        })
    }
    handleRadioGroupChange = (value) => {
        console.log("roles---->", value)
        this.setState({
            roleId: value
        })
    }

    openDialogBox = () => {
        this.setState({
            openDialog: !this.state.openDialog,
        })
    }
    render() {

        // <option key={indx} value={item.product_name}>{item.product_name}</option>
        let dropdown = this.state.product.map((item, indx) => {
            return (item === null ? '' : <div key={indx}>
                <Checkbox value={item.id} onChange={this.onChange.bind(this)} />
                {item.product_name}


            </div>
            )
        })
        return (
            <div >
                <AppBar position="absolute" >
                    <Toolbar>
                        <Typography variant="h4" className='title' >
                            Registration
                            </Typography>
                    </Toolbar>
                </AppBar>


                <div className="page">
                    <Card className="cardView">
                        <div>
                            <FormLabel component="role" style={{ fontWeight: 'bold', fontSize: 'large', textAlign: 'center' }}>Regiter user</FormLabel>
                        </div>


                        <div className="form-field">
                            <TextField
                                className="homepageostosub"
                                required
                                id="firstname"
                                label="First Name"

                                type="text"
                                margin="normal"
                                variant="outlined"
                                value={this.state.userName}
                                onChange={this.onChangeUserName}
                                errorText={this.state.firstNameError}

                            />
                        </div>
                        <div className="form-field">

                            <TextField
                                className="homepageostosub"
                                required
                                id="email"
                                label="email"

                                type="email"
                                margin="normal"
                                variant="outlined"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                errorText={this.state.emailError}


                            />

                        </div>

                        <div className="form-field">

                            <TextField
                                className="homepageostosub"
                                required
                                id="password"
                                label="password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                errorText={this.state.passwordError}
                            />

                        </div>

                        <div>

                            <FormControl component="fieldset">
                                <Card class="card">
                                    <div className="rules">Types Of Rules</div>
                                    <RadioGroup aria-label="role" value={this.value} className="roleContents" row>

                                        <FormControlLabel value="1" control={<Radio />} label="Admin" onClick={() => this.handleRadioGroupChange(1)} />
                                        <FormControlLabel value="2" control={<Radio />} label="PM" onClick={() => this.handleRadioGroupChange(2)} />
                                        <FormControlLabel value="3" control={<Radio />} label="Org_Lead" onClick={() => this.handleRadioGroupChange(3)} />
                                        <FormControlLabel value="4" control={<Radio />} label="User" onClick={() => this.handleRadioGroupChange(4)} />
                                    </RadioGroup>
                                </Card>

                            </FormControl>
                        </div>
                        
                        <Paper class="dropDown" >
                        <div className="heading">Add Products</div>
                            {dropdown}

                        </Paper>
                        <div className="buttons1">

                            <Button onClick={this.saveData} color='primary' variant="contained" >submit</Button>
                        </div>

                    </Card>
                </div>
            </div>
        )
    }
}
export default withRouter(UserRegistration)