import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ mealAttributes }) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{mealAttributes.name}</h3>
        <p className={classes.description}>{mealAttributes.description}</p>
        <p className={classes.price}>{mealAttributes.price}</p>
      </div>
      <MealItemForm foodName={mealAttributes.name} />
    </li>
  );
};

export default MealItem;
