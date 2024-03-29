import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCreateOrder } from "../features/createOrderSlice";
import { useForm } from "react-hook-form";
import InputBox from "../components/InputBox";
import DropDown from "../components/DropDown";
import Navbar from "../components/Navbar";

export default function CreateOrder() {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.orders);
  console.log("all Orders at createOrder", allOrders);

  const [billingAddressCheck, setBillingAddressCheck] = useState(false);
  const [deliveryAddressCheck, setDeliveryAddressCheck] = useState(false);
  const [customerAddress, setCustomerAddress] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm();
  const onSubmit = (data) => {
    console.log("inside onSubmit", data);

    dispatch(addCreateOrder(data));
    reset();
    setBillingAddressCheck(false);
    setDeliveryAddressCheck(false);
  };

  const handleBillingCheckChange = (e) => {
    setBillingAddressCheck(e.target.checked);
    console.log("customerAddress:", customerAddress);
    if (e.target.checked) {
      setValue("paymentDetails.paymentAddress", customerAddress.Address);
      setValue("paymentDetails.PostalCode", customerAddress.PostalCode);
      setValue("paymentDetails.City", customerAddress.City);
      setValue("paymentDetails.State", customerAddress.State);
      setValue("paymentDetails.Country", customerAddress.Country);
    } else {
      setValue("paymentDetails.paymentAddress", "");
      setValue("paymentDetails.PostalCode", "");
      setValue("paymentDetails.City", "");
      setValue("paymentDetails.State", "");
      setValue("paymentDetails.Country", "");
    }
  };
  const handleDeliveryCheckChange = (e) => {
    setDeliveryAddressCheck(e.target.checked);
    console.log("customerAddress:", customerAddress);
    if (e.target.checked) {
      setValue("shipmentDetails.Address", customerAddress.Address);
      setValue("shipmentDetails.PostalCode", customerAddress.PostalCode);
      setValue("shipmentDetails.City", customerAddress.City);
      setValue("shipmentDetails.State", customerAddress.State);
      setValue("shipmentDetails.Country", customerAddress.Country);
    } else {
      setValue("shipmentDetails.Address", "");
      setValue("shipmentDetails.PostalCode", "");
      setValue("shipmentDetails.City", "");
      setValue("shipmentDetails.State", "");
      setValue("shipmentDetails.Country", "");
    }
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
      <div className="p-3">
        <Navbar
          title="Create Order"
          buttonStyle={buttonStyle}
          btnTitle="Save"
        />
        <div className="grid gap-y-4">
          {/* Order Details Block Start */}
          <div className="grid gap-2">
            <div
              style={{
                color: "#2D2D2D",
                fontWeight: "500",
                lineHeight: "19px",
                fontSize: "16px",
              }}
            >
              Order Details
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3 grid-flow-row gap-x-8 gap-y-8">
              <InputBox
                type="date"
                title="Received Date*"
                name="orderDetails.receivedDate"
                category="orderDetails"
                field="receivedDate"
                required
                errors={errors}
                register={register("orderDetails.receivedDate", {})}
              />

              <DropDown
                title="Order Location*"
                name="orderDetails.Location"
                errors={errors}
                category="orderDetails"
                field="Location"
                required
                register={register("orderDetails.Location", {})}
              />
              <InputBox
                type="text"
                title="Order Note*"
                className="md:col-span-3"
                name="orderDetails.Note"
                errors={errors}
                category="orderDetails"
                required
                field="Note"
                register={register("orderDetails.Note", {})}
              />
            </div>
          </div>
          {/* Order Details Block Ends */}
          {/* Product Details Block start */}
          <div className="grid gap-2">
            <div
              style={{
                color: "#2D2D2D",
                fontWeight: "500",
                lineHeight: "19px",
                fontSize: "16px",
              }}
            >
              Product Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-x-8 gap-y-8">
              <DropDown
                title="Name*"
                name="productDetails.Name"
                category="productDetails"
                field="Name"
                errors={errors}
                required
                register={register("productDetails.Name", {})}
              />
              <InputBox
                type="text"
                title="Code"
                name="productDetails.code"
                category="productDetails"
                field="code"
                placeholder=""
                errors={errors}
                register={register("productDetails.code", {})}
              />
              <InputBox
                type="number"
                title="Quantity*"
                onChange={(e) => {
                  if (e.target.value < 0) {
                    e.target.value = 0;
                  }
                }}
                name="productDetails.quantity"
                category="productDetails"
                field="quantity"
                required
                errors={errors}
                register={register("productDetails.quantity", {})}
              />
              <InputBox
                type="number"
                title="Price*"
                onChange={(e) => {
                  if (e.target.value < 0) {
                    e.target.value = 0;
                  }
                }}
                name="productDetails.price"
                category="productDetails"
                field="price"
                required
                errors={errors}
                register={register("productDetails.price", {})}
              />
            </div>
          </div>
          {/* Product Details Block Ends */}

          {/* Customer Details Block start */}
          <div className="grid gap-2">
            <div
              style={{
                color: "#2D2D2D",
                fontWeight: "500",
                lineHeight: "19px",
                fontSize: "16px",
              }}
            >
              Customer Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-x-8 gap-y-8">
              <InputBox
                type="text"
                title="Customer Name*"
                name="customerDetails.customerName"
                category="customerDetails"
                field="customerName"
                required
                errors={errors}
                register={register("customerDetails.customerName", {})}
              />
              <InputBox
                type="email"
                title="Email*"
                name="customerDetails.email"
                category="customerDetails"
                field="email"
                required
                errors={errors}
                register={register("customerDetails.email", {
                  pattern: {
                    value: /^\S+@\S+\.\S+$/i,
                    message: "Please enter a valid email address.",
                  },
                })}
              />
              <InputBox
                type="number"
                title="Mobile Number*"
                onChange={(e) => {
                  if (e.target.value < 0) {
                    e.target.value = 0;
                  }
                }}
                name="customerDetails.mobileNumber"
                category="customerDetails"
                field="mobileNumber"
                errors={errors}
                required
                register={register("customerDetails.mobileNumber", {
                  pattern: {
                    value: /^\d{10}$/,
                    message:
                      "Oops! Please enter a valid 10 digit Mobile Number",
                  },
                })}
              />
              <InputBox
                type="text"
                title="Address Line*"
                className="md:col-span-2"
                name="customerDetails.Address"
                category="customerDetails"
                field="Address"
                onChange={(e) => {
                  setCustomerAddress((prevData) => ({
                    ...prevData,
                    Address: e.target.value,
                  }));
                }}
                required
                errors={errors}
                register={register("customerDetails.Address", {})}
              />
              <InputBox
                type="number"
                title="Zip/Postal Code*"
                name="customerDetails.PostalCode"
                category="customerDetails"
                field="PostalCode"
                required
                onChange={(e) => {
                  setCustomerAddress((prevData) => ({
                    ...prevData,
                    PostalCode: e.target.value,
                  }));
                }}
                errors={errors}
                register={register("customerDetails.PostalCode", {
                  pattern: {
                    value: /^\d{6}$/,
                    message: "Oops! Please enter a valid 6 digit Postal Code",
                  },
                })}
              />
              <DropDown
                title="City*"
                name="customerDetails.City"
                category="customerDetails"
                field="City"
                required
                onChange={(e) => {
                  setCustomerAddress((prevData) => ({
                    ...prevData,
                    City: e.target.value,
                  }));
                }}
                errors={errors}
                register={register("customerDetails.City", {})}
              />
              <DropDown
                title="State*"
                name="customerDetails.State"
                category="customerDetails"
                field="State"
                required
                onChange={(e) => {
                  setCustomerAddress((prevData) => ({
                    ...prevData,
                    State: e.target.value,
                  }));
                }}
                errors={errors}
                register={register("customerDetails.State", {})}
              />
              <DropDown
                title="Country*"
                name="customerDetails.Country"
                category="customerDetails"
                field="Country"
                required
                onChange={(e) => {
                  setCustomerAddress((prevData) => ({
                    ...prevData,
                    Country: e.target.value,
                  }));
                }}
                errors={errors}
                register={register("customerDetails.Country", {})}
              />
            </div>
          </div>
          {/* Customer Details Block Ends */}

          {/* Payment Details Block start */}
          <div className="grid gap-2">
            <div
              style={{
                color: "#2D2D2D",
                fontWeight: "500",
                lineHeight: "19px",
                fontSize: "16px",
              }}
            >
              Payment Details
            </div>
            <div className="text-xs flex gap-1 align-center">
              <input
                type="checkBox"
                checked={billingAddressCheck}
                onChange={handleBillingCheckChange}
              />
              Billing Address Same as Customer Address
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-x-8 gap-y-8">
              <DropDown
                title="Payment Method*"
                options={["Credit Card", "Debit Card"]}
                name="paymentDetails.paymentMethod"
                category="paymentDetails"
                field="paymentMethod"
                required
                errors={errors}
                register={register("paymentDetails.paymentMethod", {})}
              />
              <InputBox
                type="number"
                title="Card No*"
                onChange={(e) => {
                  if (e.target.value < 0) {
                    e.target.value = 0;
                  }
                }}
                name="paymentDetails.cardNo"
                category="paymentDetails"
                field="cardNo"
                required
                errors={errors}
                register={register("paymentDetails.cardNo", {})}
              />
              <InputBox
                type="text"
                title="Card Holder Name*"
                name="paymentDetails.cardHolderName"
                category="paymentDetails"
                field="cardHolderName"
                required
                errors={errors}
                register={register("paymentDetails.cardHolderName", {})}
              />
              <DropDown
                title="Payment Status*"
                name="paymentDetails.paymentStatus"
                category="paymentDetails"
                field="paymentStatus"
                options={["Paid", "Not Paid"]}
                required
                errors={errors}
                register={register("paymentDetails.paymentStatus", {})}
              />
              <InputBox
                type="date"
                title="Payment Date*"
                name="paymentDetails.paymentDate"
                category="paymentDetails"
                field="paymentDate"
                required
                errors={errors}
                register={register("paymentDetails.paymentDate", {})}
              />
              <InputBox
                type="number"
                title="Amount*"
                onChange={(e) => {
                  if (e.target.value < 0) {
                    e.target.value = 0;
                  }
                }}
                name="paymentDetails.amount"
                category="paymentDetails"
                field="amount"
                required
                errors={errors}
                register={register("paymentDetails.amount", {})}
              />
              <InputBox
                type="text"
                title="Address Line*"
                className="md:col-span-2"
                name="paymentDetails.paymentAddress"
                category="paymentDetails"
                field="paymentAddress"
                required
                errors={errors}
                register={register("paymentDetails.paymentAddress", {})}
              />
              <InputBox
                type="number"
                title="Zip/Postal Code*"
                onChange={(e) => {
                  if (e.target.value < 0) {
                    e.target.value = 0;
                  }
                }}
                name="paymentDetails.PostalCode"
                category="paymentDetails"
                field="PostalCode"
                required
                errors={errors}
                register={register("paymentDetails.PostalCode", {
                  pattern: {
                    value: /^\d{6}$/,
                    message: "Oops! Please enter a valid 6 digit Postal Code",
                  },
                })}
              />
              <DropDown
                title="City*"
                name="paymentDetails.City"
                category="paymentDetails"
                field="City"
                required
                errors={errors}
                register={register("paymentDetails.City", {})}
              />
              <DropDown
                title="State*"
                name="paymentDetails.State"
                category="paymentDetails"
                field="State"
                required
                errors={errors}
                register={register("paymentDetails.State", {})}
              />
              <DropDown
                title="Country*"
                name="paymentDetails.Country"
                category="paymentDetails"
                field="Country"
                required
                errors={errors}
                register={register("paymentDetails.Country", {})}
              />
            </div>
          </div>
          {/* Payment Details Block Ends */}

          {/* Shipment Details Block start */}
          <div className="grid gap-2">
            <div
              style={{
                color: "#2D2D2D",
                fontWeight: "500",
                lineHeight: "19px",
                fontSize: "16px",
              }}
            >
              Shipment Details
            </div>
            <div className="text-xs flex gap-1 align-center">
              <input
                type="checkBox"
                checked={deliveryAddressCheck}
                onChange={handleDeliveryCheckChange}
              />
              Delivery Address Same as Customer Address
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-x-8 gap-y-8">
              <InputBox
                type="date"
                title="Delivery Date*"
                name="shipmentDetails.deliveryDate"
                category="shipmentDetails"
                field="deliveryDate"
                required
                errors={errors}
                register={register("shipmentDetails.deliveryDate", {})}
              />
              <InputBox
                type="text"
                title="Address Line*"
                className="md:col-span-2"
                name="shipmentDetails.Address"
                category="shipmentDetails"
                field="Address"
                required
                errors={errors}
                register={register("shipmentDetails.Address", {})}
              />
              <InputBox
                type="number"
                title="Zip/Postal Code*"
                onChange={(e) => {
                  if (e.target.value < 0) {
                    e.target.value = 0;
                  }
                }}
                name="shipmentDetails.PostalCode"
                category="shipmentDetails"
                field="PostalCode"
                required
                errors={errors}
                register={register("shipmentDetails.PostalCode", {
                  pattern: {
                    value: /^\d{6}$/,
                    message: "Oops! Please enter a valid 6 digit Postal Code",
                  },
                })}
              />
              <DropDown
                title="City*"
                name="shipmentDetails.City"
                category="shipmentDetails"
                field="City"
                required
                errors={errors}
                register={register("shipmentDetails.City", {})}
              />
              <DropDown
                title="State*"
                name="shipmentDetails.State"
                category="shipmentDetails"
                field="State"
                required
                errors={errors}
                register={register("shipmentDetails.State", {})}
              />
              <DropDown
                title="Country*"
                name="shipmentDetails.Country"
                category="shipmentDetails"
                field="Country"
                required
                errors={errors}
                register={register("shipmentDetails.Country", {})}
              />
            </div>
          </div>
          {/* Shipment Details Block Ends */}
        </div>
      </div>
    </form>
  );
}
