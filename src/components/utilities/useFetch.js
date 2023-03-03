import { useState, useEffect } from "react";
import axios from "axios";
import paginate from "./paginate";
const url = "https://dummyjson.com/products";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await axios.get(url);
    const product = response.data.products;
    setData(paginate(product));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
