import { useState } from "react";
import { groceriesData } from "../../assets/data";
import GroceryTable from "./GroceryTable";

export const Filter = () => {
  const [filter, setFilter] = useState<string | null>(null);

  // const [currentPage, setCurrentPage] = useState<number>(1);
  const uniqueGroceriesName = groceriesData.filter((item, index, array) => {
    // Check if the current item's name is the first occurrence in the array
    return array.findIndex((i) => i.name === item.name) === index;
  });

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setFilter(e.target.value);
    }
    // console.log(filter);
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFilter(null);
    // setCurrentPage(1);
  };

  // groceryTable -- array - filter based on seletion

  const newGroceriesData = filter
    ? groceriesData.filter((item) => item.name == filter)
    : groceriesData;
  return (
    <div>
      <div
        className="select"
        style={{ display: "flex", justifyContent: "flex-start", gap: "20px" }}
      >
        <select
          name="selectedProduct"
          onChange={(e) => handleSelect(e)}
          style={{
            padding: "8px",
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "capitalize",
            border: "1px solid gray",
            outline: "none",
            borderRadius: "3px",
          }}
        >
          <option value="" disabled style={{ display: "none" }}>
            Select a product
          </option>
          {uniqueGroceriesName.map((item) => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button onClick={(e) => handleReset(e)}>Reset</button>
      </div>

      <p>{filter}</p>

      <GroceryTable
        groceriesData={newGroceriesData}
        // currentPage={currentPage}
      />
    </div>
  );
};
