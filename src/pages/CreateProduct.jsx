import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCreateBatch } from "../features/createBatchSlice";
import { useForm } from "react-hook-form";
import InputBox from "../components/InputBox";
import DropDown from "../components/DropDown";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Icon from "../images/icon.png"

export default function CreateBatch() {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.orders);
  console.log("all Orders at createOrder", allOrders);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("inside onSubmit", data);

    dispatch(addCreateBatch(data));
    reset();
  };

  const buttonStyle = {
    backgroundColor: "#2CAE66",
    borderRadius: "8px",
    width: "138px",
    height: "42px",
    paddingLeft: "16px",
    paddingRight: "16px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "22px",
  };

  


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-8">
        <Navbar
          title="Create Product"
          buttonStyle={buttonStyle}
          btnTitle="Next"
        />
        <div className="grid gap-y-4 pt-8 ">
          <div
            style={{
              color: "#2D2D2D",
              fontWeight: "500",
              lineHeight: "19px",
              fontSize: "16px",
            }}
          >
            Basic Details
          </div>

          <div className="grid grid-cols-3 gap-8">
            
            <InputBox
              type="file"
             title="Product Name/Code*"
              name="productName1"
              className="row-span-2"
              required
              errors={errors}
              register={register("productName1", {})}
            />
            <InputBox
              type="text"
              title="Product Name*"
              name="productName"
              required
              errors={errors}
              register={register("productName", {})}
            />

            <InputBox
              type="text"
              title="Product Name/Code*"
              name="productNameCode"
              errors={errors}
              required
              register={register("productNameCode", {})}
            />

            <DropDown
              title="Category*"
              name="category"
              errors={errors}
              required
              register={register("category", {})}
            />

            <DropDown
              title="Sub Category*"
              name="subCategory"
              errors={errors}
              required
              register={register("subCategory", {})}
            />
          </div>
        </div>
        <div className="grid gap-y-4 pt-8 ">
          <div
            style={{
              color: "#2D2D2D",
              fontWeight: "500",
              lineHeight: "19px",
              fontSize: "16px",
            }}
          >
            Other Details
          </div>

          <div className="grid grid-cols-3 gap-8 ">
            <InputBox
              type="number"
              title="UPC*"
              name="upc"
              required
              errors={errors}
              register={register("upc", {})}
            />
            <InputBox
              type="text"
              title="GL Number*"
              name="glNumber"
              required
              errors={errors}
              register={register("glNumber", {})}
            />

            <InputBox
              type="text"
              title="Product Name/Code*"
              name="productNameCode"
              className="row-span-2"
              errors={errors}
              required
              register={register("productNameCode", {})}
            />
            <InputBox
              type="number"
              title="Minimum Quantity*"
              name="minimumQuantity"
              errors={errors}
              required
              register={register("minimumQuantity", {})}
            />

            <DropDown
              title="Measurement Type*"
              name="measurementType"
              errors={errors}
              required
              register={register("measurementType", {})}
            />

            <InputBox
              type="text"
              title="Description*"
              className="col-span-3"
              name="minimumQuantity"
              errors={errors}
              required
              register={register("minimumQuantity", {})}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
