import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../baseUrl';

const RenderCard = (props) => {
    if (props.isLoading) {
        return(
                <Loading />
        );
    }
    else if (props.errMess) {
        return(
                <h4>{props.errMess}</h4>
        );
    } else 
  return(
    <Card >
        <CardImg src={baseUrl + props.item.image} alt={props.item.name} />
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
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} isLoading={props.leaderLoading} errMess={props.leaderErrMess}/>
                </div>
            </div>
        </div>
    );
}

export default Home;