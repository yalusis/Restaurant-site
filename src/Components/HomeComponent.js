import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const RenderCard = (props) => {
  return(
    <Card >
        <CardImg src={props.item.image} alt={props.item.name} />
        <CardBody>
        <CardTitle><h4>{props.item.name}</h4></CardTitle>
        {props.item.designation ? <CardSubtitle><strong>{props.item.designation}</strong></CardSubtitle> : null }
        <CardText>{props.item.description}</CardText>
        </CardBody>
    </Card>
  );
}

const Home = (props) => {
    return(
      <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;