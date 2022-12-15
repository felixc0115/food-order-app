import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const addItemHandler = (event) => {
    const meal = {
      name: props.foodName,
      qty: event.target.value,
    };
  };

  return (
    <>
      <form className={classes.form}>
        <Input
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
          onChange={addItemHandler}
        />
        <button onClick={addItemHandler}>+ Add</button>
      </form>
    </>
  );
};

export default MealItemForm;
