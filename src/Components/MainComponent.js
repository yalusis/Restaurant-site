import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import { Routes, Route, Navigate, useParams} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { FetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { useEffect, useState} from 'react';
import { CSSTransition } from 'react-transition-group';

const Main = () => {
const state = useSelector((state) => state);
const dispatch = useDispatch()

useEffect(() => {
  dispatch(FetchDishes());
  dispatch(fetchComments());
  dispatch(fetchPromos());
  dispatch(fetchLeaders());
}, [])

const DishWithId = () => {
  const { dishId } = useParams();
  const Dish = state.dishes.dishes.filter((dish) => dish.id === Number(dishId))
  const selectComments = state.comments.comments.filter((comment) => comment.dishId === Number(dishId))
  return(
      <DishDetail dish={Dish} 
      isLoading={state.dishes.isLoading}
      errMess={state.dishes.errMess}
      comments={selectComments} 
      commentsErrMess={state.comments.errMess}
      addComment={state.addComment}
      dishId={dishId} />
  );
};

const [show, setShow] = useState(false)

useEffect(() => {
  setShow(!show)
}, [])

    return ( 
        <div>
        <Header /> 
        <CSSTransition in={show}  classNames="page" timeout={300}>                      
          <Routes >
            <Route path='/home'  element={ <Home 
              dish={state.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={state.dishes.isLoading}
              dishesErrMess={state.dishes.errMess}
              promotion={state.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={state.promotions.isLoading}
              promoErrMess={state.promotions.errMess}
              leader={state.leaders.leaders.filter((leader) => leader.featured)[0]} 
              leaderLoading={state.leaders.isLoading}
              leaderErrMess={state.leaders.errMess} />} />
            <Route exact path='/aboutus' element={<About leaders={state.leaders.leaders}
             isLoading={state.leaders.isLoading}
             errMess={state.leaders.errMess}/>} />
            <Route exact path='/menu' element={<Menu dishes={state.dishes} 
            dishesLoading={state.dishes.isLoading}
            dishesErrMess={state.dishes.errMess}/>} />
            <Route path='/menu/:dishId' element={<DishWithId />} />
            <Route exact path='/contactus' element={<Contact />} />
            <Route path='*'  element={ <Navigate to="/home" replace/> } />
          </Routes>
          </CSSTransition>
        <Footer />
      </div>
      
);
}

export default Main;