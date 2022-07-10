import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Dishdetail = (props) => {

    function renderDishes(dish) {
            return(
                <Card id = {dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
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
    }

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
                </div>
                </div>
            </div>
        )
   }

export default Dishdetail;