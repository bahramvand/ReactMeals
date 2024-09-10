import { Fragment } from 'react';
import foodImage from '../../assets/meals.jpg';
import classes from './Header.module.scss';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={foodImage} alt="A Table full of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
