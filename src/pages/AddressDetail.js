import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../Redux/FormSlice";

export const AddressDetail = ({ current, setCurrent }) => {
  const [isFilled, setIsFilled] = useState(false);
  const coAddressFormData = useSelector(
    (state) => state.form.formData.coAddress
  );
  const perAddressFormData = useSelector(
    (state) => state.form.formData.perAddress
  );

  const dispatch = useDispatch();
  const states = [
    "select your state",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh (UT)",
    "Chhattisgarh",
    "Dadra and Nagar Haveli (UT)",
    "Daman and Diu (UT)",
    "Delhi(NCT)",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Kerala",
    "Lakshadweep (UT)",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry (UT)",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
  ];

  const handleCoAddress = (e) => {
    const { name, value } = e.target;
    dispatch(
      setFormData({
        section: "coAddress",
        field: name,
        value: value,
      })
    );
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      dispatch(
        setFormData({
          section: "perAddress",
          field: "perAddressLine1",
          value: coAddressFormData.coAddressLine1,
        })
      );
      dispatch(
        setFormData({
          section: "perAddress",
          field: "perAddressLine2",
          value: coAddressFormData.coAddressLine2,
        })
      );
      dispatch(
        setFormData({
          section: "perAddress",
          field: "perState",
          value: coAddressFormData.coState,
        })
      );
      dispatch(
        setFormData({
          section: "perAddress",
          field: "perPincode",
          value: coAddressFormData.coPincode,
        })
      );
    }
  };

  const handlePerAdderess = (e) => {
    const { name, value } = e.target;
    dispatch(
      setFormData({
        section: "perAddress",
        field: name,
        value: value,
      })
    );
  };

  const handleNextButton = (e) => {
    e.preventDefault();
    if (
      coAddressFormData.coAddressLine1 !== "" &&
      coAddressFormData.coAddressLine2 !== "" &&
      coAddressFormData.coState !== "" &&
      coAddressFormData.coPincode !== "" &&
      perAddressFormData.perAddressLine1 !== "" &&
      perAddressFormData.perAddressLine2 !== "" &&
      perAddressFormData.perState !== "" &&
      perAddressFormData.perPincode !== ""
    ) {
      setCurrent(current + 1);
    }
  };
  // eslint-disable-next-line
  useEffect(() => {
    if (
      isFilled === false &&
      coAddressFormData.coAddressLine1 !== "" &&
      coAddressFormData.coAddressLine2 !== "" &&
      coAddressFormData.coState !== "" &&
      coAddressFormData.coPincode !== "" &&
      perAddressFormData.perAddressLine1 !== "" &&
      perAddressFormData.perAddressLine2 !== "" &&
      perAddressFormData.perState !== "" &&
      perAddressFormData.perPincode !== ""
    ) {
      setIsFilled(true);
    }
  });
  const prev=()=>{
    setCurrent(current-1);
  }
  return (
    <div className="flex justify-center">
      <form>
        <div className="p-5">
          <div className="p-1 text-center font-bold mb-2">
            <h3>Correspondence Address </h3>
          </div>
          <div className="mb-1">
            <label htmlFor="coAddressLine1">Address Line 1: </label>
            <br />
            <input
              type="text"
              name="coAddressLine1"
              value={coAddressFormData.coAddressLine1}
              onChange={handleCoAddress}
              className="border w-[100%]"
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="coAddressLine2">Address Line 2: </label>
            <br />
            <input
              type="text"
              name="coAddressLine2"
              value={coAddressFormData.coAddressLine2}
              onChange={handleCoAddress}
              className="border w-[100%]"
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="coState">State: </label>
            <br />
            <select
              name="coState"
              value={coAddressFormData.coState}
              onChange={handleCoAddress}
            >
              {states.map((state,index) => (
                    <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="mb-1">
            <label htmlFor="coPincode">Pincode: </label>
            <br />
            <input
              type="number"
              name="coPincode"
              value={coAddressFormData.coPincode}
              onChange={handleCoAddress}
              className="border w-[100%]"
              required
            />
          </div>
        </div>
        <label htmlFor="checkAddress">Same as Correspondence Address </label>
        <input
          type="checkbox"
          name="checkAddress"
          onChange={handleCheckboxChange}
        />
        <div className=" p-5">
          <div className="p-1 text-center font-bold mb-2">
            <h4>Permanent Address </h4>
          </div>
          <div className="mb-1">
            <label htmlFor="perAddressLine1">Address Line 1: </label>
            <br />
            <input
              type="text"
              name="perAddressLine1"
              value={perAddressFormData.perAddressLine1}
              onChange={handlePerAdderess}
              className="border w-[100%]"
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="perAddressLine2">Address Line 2: </label>
            <br />
            <input
              type="text"
              name="perAddressLine2"
              value={perAddressFormData.perAddressLine2}
              onChange={handlePerAdderess}
              className="border w-[100%]"
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="perState">State: </label>
            <br />
            <select
              name="perState"
              value={perAddressFormData.perState}
              onChange={handlePerAdderess}
            >
              {states.map((state,index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="mb-1">
            <label htmlFor="perPincode">Pincode: </label>
            <br />
            <input
              type="number"
              name="perPincode"
              value={perAddressFormData.perPincode}
              onChange={handlePerAdderess}
              className="border w-[100%]"
              required
            />
          </div>
        </div>
        {isFilled ? (
          <div className="flex justify-center m-2">
            <button
              type="primary"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={handleNextButton}
            >
              Next{" "}
            </button>
          </div>
        ) : (
          <div className="flex justify-center m-2">
            <button type="primary"
              class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
              onClick={handleNextButton}
            >
              Next
            </button>
          </div>
        )}
        <div className="flex justify-center m-2">
            <button type="primary"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={prev}
            >
              Prev
            </button>
          </div>
      </form>
    </div>
  );
};
