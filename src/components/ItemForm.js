import React, {useState} from "react";
import { v4 as uuid } from "uuid";


// _When the form is submitted_, a new item should be created
// and added to our list of items.
// Make all the input fields for this form controlled inputs, so that you can
//   access all the form data via state. When setting the initial state for the
//   `<select>` tag, use an initial value of "Produce" (since that's the first
//   option in the list).

function ItemForm({onItemFormSubmit}) {
  const [newItemData, setNewItemData ] = useState({
    name: "",
    category: "Produce",
  })
  const handleChange = (e) => {
    setNewItemData({
     ...newItemData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onItemFormSubmit({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    ...newItemData
  });
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
