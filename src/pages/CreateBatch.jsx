import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCreateBatch } from "../features/createBatchSlice";
import { useForm } from "react-hook-form";
import InputBox from "../components/InputBox";
import DropDown from "../components/DropDown";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

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
          title="Create Batch"
          buttonStyle={buttonStyle}
          btnTitle="Add Product +"
        />
        <div className="grid gap-y-4 pt-8">
          <div className="grid gap-2">
            <div className="grid  grid-cols-1 md:grid-cols-3 grid-flow-row gap-x-8 gap-y-8">
              <InputBox
                type="text"
                title="Product Name/Code*"
                name="productName"
                required
                errors={errors}
                register={register("productName", {})}
              />

              <DropDown
                title="Storage Location*"
                name="storageLocation"
                errors={errors}
                required
                register={register("storageLocation", {})}
              />

              <InputBox
                type="text"
                title="Batch ID*"
                name="batchId"
                errors={errors}
                required
                register={register("batchId", {})}
              />
            </div>
          </div>

          <div className="grid gap-2">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-x-8 gap-y-8">
             
              <InputBox
                type="text"
                title="Make Order#*"
                name="makeOrder"
                required
                errors={errors}
                register={register("makeOrder", {})}
              />

              <InputBox
                type="date"
                title="Expiry Date*"
                name="expiryDate"
                required
                errors={errors}
                register={register("expiryDate", {})}
              />
              <InputBox
                type="number"
                title="Quantity(Units)*"
                name="quantity"
                required
                errors={errors}
                register={register("quantity", {})}
              />
            </div>
          </div>


          <div className="grid gap-2">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-x-8 gap-y-8">
          <InputBox
                type="number"
                title="Price($)*"
                name="price"
                required
                errors={errors}
                register={register("price", {})}
              />
</div>
</div>
<div className="flex flex-row justify-end">
              <Button
                title="Save"
                className="border-1 border-solid border-black rounded-md pt-0 pb-0"
                style={{
                  backgroundColor: "#B3B3B3",
                  width: "138px",
                  height: "42px",
                  borderRadius: "8px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  marginTop: "8px",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                }}
              />
            </div>
        </div>
      </div>
    </form>
  );
}
