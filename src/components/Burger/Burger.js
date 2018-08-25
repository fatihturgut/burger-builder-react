import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((A, index) => {
        // array içerisi undefined geliyor, bu yani  kullanmadığımız "A" değişkeni
        // console.log([...Array(props.ingredients[igKey])])
        // console.log("igKey", igKey);
        // console.log("index", index);
        return <BurgerIngredient key={igKey + index} type={igKey} />;
      });
    });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;