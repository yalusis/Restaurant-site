import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import { Routes, Route, Navigate, useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Main = () => {

const state = useSelector((state) => state)

const DishWithId = () => {
  const { dishId } = useParams();
  const Dish = state.dishes.filter((dish) => dish.id == dishId)
  const selectComments = state.comments.filter((comment) => comment.dishId == dishId)
  return(
      <DishDetail dish={Dish} comments={selectComments} />
  );
};

    return ( 
      <div>
        <Header />                         
          <Routes>
            <Route path='/home'  element={ <Home 
              dish={state.dishes.filter((dish) => dish.featured)[0]}
              promotion={state.promotions.filter((promo) => promo.featured)[0]}
              leader={state.leaders.filter((leader) => leader.featured)[0]} /> } />
            <Route exact path='/aboutus' element={<About leaders={state.leaders} />} />
            <Route exact path='/menu' element={<Menu dishes={state.dishes} />} />
            <Route path='/menu/:dishId' element={<DishWithId />} />
            <Route exact path='/contactus' element={<Contact />} />
            <Route path='*'  element={ <Navigate to="/home" replace/> } />
          </Routes> 
        <Footer />
      </div>
);
}

export default Main;