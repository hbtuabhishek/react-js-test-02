import React, { useEffect, useState } from "react";

const getDataFromLS = () => {
  const data = localStorage.getItem("cloth");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const FormCloth = (props) => {
  const [Cloth, setCloth] = useState(getDataFromLS());

  const [enteredTname, setEnteredTname] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");

  const orderChangeHandler = (event) => {
    event.preventDefault();
    const fooddata = {
      enteredTname,
      enteredDescription,
      enteredPrice,
      enteredQuantity,
    };
    setCloth([...Cloth, fooddata]);
    setEnteredTname("");
    setEnteredDescription("");
    setEnteredPrice("");
    setEnteredQuantity("");
  };
  const deletefood = (enteredOrderId) => {
    const filteredFood = Cloth.filter((element, index) => {
      return element.enteredOrderId !== enteredOrderId;
    });
    setCloth(filteredFood);
  };
  useEffect(() => {
    localStorage.setItem("food", JSON.stringify(Cloth));
  }, [Cloth]);
  return (
    <div>
      <form onSubmit={orderChangeHandler}>
        <label>T-shirt Name</label>
        <input
          type="number"
          onChange={(e) => setEnteredTname(e.target.value)}
          value={enteredTname}
        />
        <label>description</label>
        <input
          type="number"
          onChange={(e) => setEnteredDescription(e.target.value)}
          value={enteredDescription}
        />
        <label>Price</label>
        <input
          type="text"
          onChange={(e) => setEnteredPrice(e.target.value)}
          value={enteredPrice}
        />
        <label>Quantity Available</label>
        <select
          onChange={(e) => setEnteredQuantity(e.target.value)}
          value={enteredQuantity}
        >
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="S">S</option>
        </select>
        <></>
        <button type="submit">Add Product</button>
      </form>

      {/* {food.length > 0 && <FoodItem food={food} deletefood={deletefood} />} */}
      <div>{Cloth.length < 1 && "No Food!!!"}</div>
    </div>
  );
};

export default FormCloth;
