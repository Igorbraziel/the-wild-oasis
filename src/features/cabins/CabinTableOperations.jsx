import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField="discount"
        options={[
          { label: "All", value: "all" },
          { label: "No Discount", value: "no-discount" },
          { label: "With Discount", value: "with-discount" },
        ]}
      />
      <SortBy options={[
        { label: "Sort By Name (A-Z)", value: "name-asc" },
        { label: "Sort By Name (Z-A)", value: "name-desc" },
        { label: "Sort By Max Capacity (Low First)", value: "maxCapacity-asc" },
        { label: "Sort By Max Capacity (High First)", value: "maxCapacity-desc" },
        { label: "Sort By Price (Low First)", value: "regularPrice-asc" },
        { label: "Sort By Price (High First)", value: "regularPrice-desc" },
      ]}/>
    </TableOperations>
  );
}

export default CabinTableOperations;
