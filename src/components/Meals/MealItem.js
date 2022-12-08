import classes from "./MealItem.module.css";

const MealItem = ({ mealAttributes }) => {
  return (
    <li className={classes.meal}>
      <h3>{mealAttributes.name}</h3>
      <p className={classes.description}>{mealAttributes.description}</p>
      <p className={classes.price}>{mealAttributes.price}</p>
    </li>
  );
};

export default MealItem;
