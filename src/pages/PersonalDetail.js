import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../Redux/FormSlice";

export const PersonalDetail = ({ current, setCurrent }) => {
  const [isFilled, setIsFilled] = useState(false);
  const personalFormData = useSelector((state) => state.form.formData.personal);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value, type, options } = e.target;
    const newValue =
      type === "select-multiple"
        ? Array.from(options)
            .filter((option) => option.selected)
            .map((option) => option.value)
            .join(", ")
        : value;
    dispatch(
      setFormData({
        section: "personal",
        field: name,
        value: newValue,
      })
    );
  };
  // eslint-disable-next-line
  useEffect(() => {
    if (
      isFilled === false &&
      personalFormData.name !== "" &&
      personalFormData.email !== "" &&
      personalFormData.dob !== "" &&
      personalFormData.fatherName !== "" &&
      personalFormData.motherName !== "" &&
      personalFormData.gender !== "" &&
      personalFormData.mobileNumber !== "" &&
      personalFormData.languages.length > 0
    ) {
      setIsFilled(true);
    }
  });

  const handleNextButton = (e) => {
    e.preventDefault();
    if (
      personalFormData.name !== "" &&
      personalFormData.email !== "" &&
      personalFormData.dob !== "" &&
      personalFormData.fatherName !== "" &&
      personalFormData.motherName !== "" &&
      personalFormData.gender !== "" &&
      personalFormData.mobileNumber !== "" &&
      personalFormData.languages.length > 0
    ) {
      setCurrent(current + 1);
    }
  };

  // console.log(persFilled);

  return (
    <div className="flex justify-center box-border ">
      <form>
        <div className="mb-1">
          <label htmlFor="name">Name: </label>
          <br />
          <input
            type="text"
            name="name"
            value={personalFormData.name}
            onChange={handleInputChange}
            className="border w-[100%]"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="dob">Date of Birth: </label>
          <br />
          <input
            type="date"
            name="dob"
            value={personalFormData.dob}
            className="border w-[100%]"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="email">Email: </label>
          <br />
          <input
            type="email"
            name="email"
            value={personalFormData.email}
            className="border w-[100%]"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="fatherName">Father Name: </label>
          <br />
          <input
            type="text"
            name="fatherName"
            value={personalFormData.fatherName}
            className="border w-[100%]"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="motherName">Mother Name: </label>
          <br />
          <input
            type="text"
            name="motherName"
            value={personalFormData.motherName}
            className="border w-[100%]"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="gender">Gender: </label>
          <br />
          Male: 
          <input
            type="radio"
            name="gender"
            value="Male"
            className="border"
            onChange={handleInputChange}
          />
          Female: 
          <input
            type="radio"
            name="gender"
            value="Female"
            className="border"
            onChange={handleInputChange}
          />
          Others: 
          <input
            type="radio"
            name="gender"
            value="Others"
            className="border"
            onChange={handleInputChange}
          />
        </div>
        <div className="p-1">
          <label htmlFor="mobileNumber">Mobile Number: </label>
          <br />
          <input
            minLength={10}
            type="number"
            name="mobileNumber"
            value={personalFormData.mobileNumber}
            className="border w-[100%]"
            onChange={handleInputChange}
          />
        </div>
        <div className="p-1">
          <label htmlFor="languages">Language Known: </label>
          <br />
          <select
            name="languages"
            onChange={handleInputChange}
            className="border w-[100%]"
            multiple
          >
            <option value={"Hindi"}>Hindi</option>
            <option value={"English"}>English</option>
            <option value={"Telgu"}>Telgu</option>
            <option value={"Punjabi"}>Punjabi</option>
          </select>
        </div>
        {isFilled ? (
          <div className="flex justify-center m-2">
            <button
              type="primary"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={handleNextButton}
            >
              Next
            </button>
          </div>
        ) : (
          <div className="flex justify-center m-2">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
              onClick={handleNextButton}
            >
              Next
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
