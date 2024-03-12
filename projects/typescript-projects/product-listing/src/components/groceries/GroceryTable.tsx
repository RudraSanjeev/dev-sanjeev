import { useEffect, useState } from "react";
import "./groceryTable.scss";
import "./pagination.css";
import ReactPaginate from "react-paginate";
import "react-paginate/theme/basic/react-paginate.css";
// import onPageActive from "react-paginate"
type data = {
  id: number;
  name: string;
  desc: string;
  quantity: number;
  total: number;
}[];

const GroceryTable = ({ groceriesData }: { groceriesData: data }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  useEffect(() => {
    setCurrentPage(0);
    // console.log(selectedPage);
    handlePageClick;
  }, [groceriesData]);

  const limit = 7;
  const offset = currentPage * limit;
  const currentPageData = groceriesData.slice(offset, offset + limit);
  const tatalPage = Math.ceil(groceriesData.length / limit);

  function handlePageClick({ selected: selectedPage }: any) {
    setCurrentPage(selectedPage);
    console.log("onPageChange value:", selectedPage);
  }

  const grandtotal = groceriesData.reduce((acc, item) => acc + item.total, 0);
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Desc</th>
            <th>quantity</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.desc}</td>
              <td>{item.quantity}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ display: "flex", textAlign: "right", fontWeight: "bold" }}>
        Grand Total: {grandtotal}
      </p>
      <div className="pagination">
        <ReactPaginate
          // key={currentPage}
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={tatalPage}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default GroceryTable;
