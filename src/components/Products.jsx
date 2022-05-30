import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";

const Products = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [prod, setProd] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const handlePrevPage = (update) => {
    if (update >= 1) {
      setPage(update);
    }
  };

  const handleNextPage = (update) => {
    setPage(update);
  };

  const handleFirstPage = (update) => {
    setPage(update);
  };

  const handleLastPage = (update) => {
    setPage(update);
  };

  const handleLimit = (update) => {
    setLimit(update)

  }

  useEffect(() => {
    const getTodo = async () => {
      let r = await axios.get(
        `http://localhost:8080/products?_page=${page}&_limit=${limit}`
      );
      console.log(r.data);
      setProd(r.data);      
      setTotalCount(Number(r.headers["x-total-count"]));
      console.log(totalCount)
    };
    getTodo();
  }, [page, limit]);
  console.log(totalCount)
  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct />
      <Grid>
        {prod.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
      {/* Pagination */}
      <Pagination
        page={page} totalCount={totalCount}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handleFirstPage={handleFirstPage}
        handleLastPage={handleLastPage}
        handleLimit={handleLimit}
      />
    </Flex>
  );
};

export default Products;
