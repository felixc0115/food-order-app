import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const addItemHandler = (event) => {
    const meal = {
      name: props.foodName,
      qty: event.target.value,
    };
    console.log(meal);
  };

  return (
    <>
      <form className={classes.form}>
        <div className={classes.input}>
          <label htmlFor="qty">Amount</label>
          <input onChange={addItemHandler} type="number" name="qty" id="qty" />
        </div>
        <button>+ Add</button>
      </form>
    </>
  );
};

export default MealItemForm;
