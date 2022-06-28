import { Card, CardImg,  CardText, CardBody, CardTitle } from "reactstrap";

const Dishdetail = (props) => {
    const set_dish = props.dishes

   if(set_dish == null) {
     return <div></div>
   } else {
    function renderDish() {
        return (
            <CardText>{set_dish.Dish.description}</CardText>
        )
    }

    function renderDishes() {
    if(set_dish != null) {
        return(
            <Card id = {set_dish.id}>
                <CardImg top src={set_dish.Dish.image} alt={set_dish.Dish.name} />
                <CardBody>
                  <CardTitle><h4>{set_dish.Dish.name}</h4></CardTitle>
                  { renderDish() }
                </CardBody>
            </Card>
        )
     }
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
              <div className="row">
                <div  className="col-12 col-md-5 m-1">
                   { renderDishes() }
                </div>
                <div  className="col-12 col-md-5 m-1">
                   <h4>Comments</h4>
                   { renderComments(set_dish.Dish.comments)}
                </div>

            </div>
        )
   }

    
    }

export default Dishdetail;