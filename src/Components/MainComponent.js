import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../dishes';
import { Routes, Route} from 'react-router-dom';

const Main = () => {

const dishes = DISHES;

    return ( 
      <div>
        <Header />                         
          <Routes>
            <Route path='/home'  element={ <Home />} />
            <Route path='/menu' element={<Menu dishes={dishes} />} />
            <Route path='*'  element={ <Home />} />
          </Routes> 
        <Footer />
      </div>
);
}

export default Main;