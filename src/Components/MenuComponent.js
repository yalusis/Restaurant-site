import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

  
const Menu = (props) =>  {

   const menu = props.dishes.map((dish) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={dish.id}
                onClick={() => props.onClick(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle><h4>{dish.name}</h4></CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
      });


      return (
              <div className="row">
                  {menu}
              </div>
      );
  }

 
export default Menu