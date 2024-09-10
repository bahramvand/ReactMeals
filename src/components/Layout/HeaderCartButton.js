import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderButton.module.scss';
import CartContext from '../../store/cart-context';
const HeaderCartButton = (props) => {
  const [btnISHighlighted, setBtnISHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce(
    (curent, item) => curent + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${
    btnISHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnISHighlighted(true);
    const timer = setTimeout(() => {
      setBtnISHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Youre Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
