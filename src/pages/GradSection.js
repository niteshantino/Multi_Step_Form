import React from "react";
import { useDispatch } from "react-redux";
import { setFormData } from "../Redux/FormSlice";

export const GradSection = ({ values }) => {
    const dispatch=useDispatch();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        dispatch(
          setFormData({
            section: "educational",
            field: name,
            value: value,
          })
        );
      };
  return (
    <div>
      <nav>
        <div>
          <label htmlFor="gradYear">Year Of Passing: </label>
          <br />
          <input
            type="number"
            name="gradYear"
            value={values.gradYear}
            className="border w-[100%]"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gradClg">College Name: </label>
          <br />
          <input
            type="text"
            name="gradClg"
            value={values.gradClg}
            className="border w-[100%]"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cgpaPercentGrad">CGPA/Percentage: </label>
          <br />
          <input
            type="number"
            name="cgpaPercentGrad"
            value={values.cgpaPercentGrad}
            className="border w-[100%]"
            onChange={handleInputChange}
            required
          />
        </div>
      </nav>
    </div>
  );
};
