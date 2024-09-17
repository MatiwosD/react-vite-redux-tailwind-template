import * as types from "./actionType";
import axios from "axios";
import GLOBAL_CONSTANTS from "../../GlobalConstants";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

// Type for product data
interface ProductData {
  id: number;
  title: string;
  [key: string]: any; // Can be extended for other fields
}

// ?get-----------------------------------------------------------
const getProductListData = (data: ProductData[]) => ({
  type: types.PRODUCTS_LIST,
  payload: data,
});

export const loadProductListData = () => {
  return (dispatch: Dispatch) => {
    axios
      .get("https://dummyjson.com/products?limit=5")
      .then((resp) => {
        dispatch(getProductListData(resp.data.products));
      })
      .catch((error) => console.error(error));
  };
};

// ?post-----------------------------------------------------------
export const forget_password = (data: object, callback: (response: any) => void) => {
  return () => {
    let headers = {
      "Content-type": "application/json",
    };
    axios
      .post(
        `${GLOBAL_CONSTANTS.backend_host}api/v1/ondc/forget_password`,
        JSON.stringify(data),
        { headers }
      )
      .then((resp) => {
        callback(resp.data);
      })
      .catch(() => {
        toast.error("Something went wrong", {
          autoClose: 2000,
        });
      });
  };
};
