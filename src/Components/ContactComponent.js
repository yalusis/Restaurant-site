import { Breadcrumb, BreadcrumbItem, Button,  Col, Label, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFirstName, addLastName, addTelNum, addEmail, addAgree, addContactType, addMessage } from '../redux/ActionCreators'

const Contact = () => {

    const [touched, setTouched] = useState({ firstname: false, lastname: false, telnum: false, email: false});
    const dispatch = useDispatch()
    const store = useSelector((store) => store)

    function handleInputChange(event) { 
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        if(target.name === 'firstname') {
           dispatch(addFirstName(value))
        } else if (target.name === 'lastname') {
            dispatch(addLastName(value))
        } else if (target.name === 'telnum') {
            dispatch(addTelNum(value))
        } else if (target.name === 'email') {
            dispatch(addEmail(value))
        } else if (target.name === 'agree') {
            dispatch(addAgree(value))
        } else if (target.name === 'contactType') {
            dispatch(addContactType(value))
        } else if (target.name === 'message') {
            dispatch(addMessage(value))
        }

    }

    function handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(store.feedback));
        alert('Current State is: ' + JSON.stringify(store.feedback));
        event.preventDefault();
    }

    function handleBlurd(event) {
        setTouched({ ...touched, [event.target.name]: true});
    }

    function validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. number should contain only numbers';
  
        if (touched.telnum && telnum.length < 3)
            errors.telnum += " AND tel. number should be >= 3 characters";    
        else if(touched.telnum && telnum.length > 10)
           errors.telnum += " AND tel. number should be <= 10 characters"

        if(touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

    const errors = validate(store.feedback.firstname, store.feedback.lastname, store.feedback.telnum, store.feedback.email);

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>             
            </div>
            <div className="row row-content">
                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={store.feedback.firstname}
                                        invalid={errors.firstname !== ''}
                                        onBlur={ handleBlurd }
                                        onChange={handleInputChange} />
                                        <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={store.feedback.lastname}
                                        invalid={errors.lastname !== ''}
                                        onBlur={handleBlurd}
                                        onChange={handleInputChange} />
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        value={store.feedback.telnum}
                                        invalid={errors.telnum !== ''}
                                        onBlur={handleBlurd}
                                        onChange={handleInputChange} />
                                        <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={store.feedback.email}
                                        invalid={errors.email !== ''}
                                        onBlur={handleBlurd}
                                        onChange={handleInputChange} />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={store.feedback.agree}
                                                onChange={handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={store.feedback.contactType}
                                            onChange={handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={store.feedback.message}
                                        onChange={handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
               </div>
        </div>
    );
}


export default Contact;