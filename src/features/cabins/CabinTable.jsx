import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import { compareValues } from "../../utils/helpers";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  const filteredValue = searchParams.get("discount") || "all";

  // 1) Filter
  let filteredCabins;
  switch (filteredValue) {
    case "all":
      filteredCabins = cabins;
      break;
    case "no-discount":
      filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
      break;
    case "with-discount":
      filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);
      break;
    default:
      throw new Error("Error filtering the cabins");
  }

  // 2) Sort
  const sortBy = searchParams.get("sortBy") || "name-asc"
  const [ field, direction ] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins?.sort((a, b) => compareValues(a[field], b[field]) * modifier);

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="4rem 1fr 1.4fr 1fr 1fr 1fr" role="table">
        <Table.Header role="row">
          <div>Image</div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
