import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem, ModalHeader, 
    Button, Modal,  ModalBody, Form, FormGroup, Input, Label, FormFeedback}  from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment} from '../redux/ActionCreators';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../baseUrl';

const Dishdetail = (props) => {

    function renderDishes(dish) {
            return(
                <Card id = {dish.id}>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle><h4>{dish.name}</h4></CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
    }

    function renderComments(comm) {

        const comment = comm.map((dish) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                   <ul class = "list-unstyled" id={dish.id}>
                   <li>{dish.comment}</li>
                   <li> --{dish.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.date)))} </li>
                </ul>
                </div>
            );
        }); 
        return comment;
    };

    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish[0].name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish[0].name}</h3>
                        <hr />
                    </div>                
                </div>
              <div className="row">
                <div  className="col-12 col-md-5 m-1">
                   {renderDishes(props.dish[0])} 
                </div>
                <div  className="col-12 col-md-5 m-1">
                   <h4>Comments</h4>
                   { renderComments(props.comments) }
                   < CommentForm dishId={props.dishId}/>
                </div>
                </div>
            </div>
        )};
   }

const CommentForm = (props) => {

    const [isModalOpen, set_isModalOpen] = useState(false);
    const [state, set_State] = useState({rating: "", name: "", comment: ""})
    const [touched, set_touched] = useState(false)
    const dispatch = useDispatch()

    function setModal() {
        set_isModalOpen(!isModalOpen)
    }

    function handleInputChange(event) {
        set_State({...state, [event.target.name] : event.target.value})
    }
    
    function setTouched() {
        set_touched({touched : true})
    }

    function handleLogin(event) {
        event.preventDefault();
        const dishId = Number(props.dishId);
        dispatch(addComment(dishId, state.rating, state.name, state.comment))
        setModal();
    }

    function validate(name) {
        let errors = '';

        if (touched && name.length < 3)
        errors = 'First Name should be >= 3 characters';
        else if (touched && name.length > 20)
        errors = 'First Name should be <= 20 characters';
        
        return errors;
    }

   const errors = validate(state.name)

    return(
        <div>
            <a role="button" onClick={setModal} className="btn btn-info"><i class="fa fa-pencil" aria-hidden="true"></i> Submit Comment</a>

            <Modal isOpen={isModalOpen} toggle={setModal}>
            <ModalHeader toggle={setModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={handleLogin}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <div>
                                <select className='select' id="rating" name="rating" value={state.rating} onChange={handleInputChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Your Name</Label>
                                <Input type="text" id="name" name="name" value={state.name} placeholder="Your Name"
                                invalid={errors !== ''}
                                onBlur={setTouched}
                                onChange={handleInputChange}/>
                                <FormFeedback>{errors}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="textarea" id="comment" name="comment" rows="6" value={state.comment} onChange={handleInputChange}/>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" >Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
        </div>
    )
}

export default Dishdetail;