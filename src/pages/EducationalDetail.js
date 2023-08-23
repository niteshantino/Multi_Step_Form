import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneFilePdf } from "react-icons/ai";
import {
  setFormData,
  addGraduation,
  addPostGraduation,
} from "../Redux/FormSlice";
import "../App.css";

export const EducationalDetail = ({ current, setCurrent }) => {
  const [isFilled, setIsFilled] = useState(false);
  const educationFormData = useSelector(
    (state) => state.form.formData.educational
  );
  const dispatch = useDispatch();

  const handleInputChange = (e, setIndex) => {
    const { name, value, files } = e.target;
    console.log(setIndex, "vsdjkvhsdio");
    let fileURL = null;
    if (files?.[0]) {
      fileURL = URL.createObjectURL(files[0]);
    }
    if (
      name === "gradYear" ||
      name === "gradClg" ||
      name === "cgpaPercentGrad" ||
      name === "docGrad"
    ) {
      dispatch(
        setFormData({
          section: "educational",
          field: name,
          value: value,
          setIndex: setIndex,
          files: fileURL,
        })
      );
    } else if (
      name === "postGradYear" ||
      name === "postGradClg" ||
      name === "cgpaPercentPostGrad" ||
      name === "docPostGrad"
    ) {
      dispatch(
        setFormData({
          section: "educational_postGraduation",
          field: name,
          value: value,
          setIndex: setIndex,
          files: fileURL,
        })
      );
    } else {
      dispatch(
        setFormData({
          section: "educational",
          field: name,
          value: value,
          files: fileURL,
        })
      );
    }
  };

  const handleNextButton = (e) => {
    e.preventDefault();
    if (
      educationFormData?.yearPass12 !== "" &&
      educationFormData?.schoolName12 !== "" &&
      educationFormData?.cgpaPercent12 !== "" &&
      educationFormData?.doc12 !== "" &&
      educationFormData?.graduation.gradYear !== "" &&
      educationFormData?.graduation.gradClg !== "" &&
      educationFormData?.graduation.cgpaPercentGrad !== "" &&
      educationFormData?.docGrad !== ""
    ) {
      setCurrent(current + 1);
    }
  };
  // eslint-disable-next-line
  useEffect(() => {
    if (
      isFilled === false &&
      educationFormData?.yearPass12 !== "" &&
      educationFormData?.schoolName12 !== "" &&
      educationFormData?.cgpaPercent12 !== "" &&
      educationFormData?.doc12 !== ""
    ) {
      for (let i = 0; i < educationFormData.graduation.length; i++) {
        if (i === 0) {
          const element = educationFormData.graduation[i];
          if (
            element?.gradYear !== "" &&
            element?.gradClg !== "" &&
            element?.cgpaPercentGrad !== "" &&
            element?.docGrad !== ""
          ) {
            setIsFilled(true);
            break;
          }
        }
      }
    }
  }, [ educationFormData,isFilled]);

  const prev = () => {
    setCurrent(current - 1);
  };
  const handleAddGrad = () => {
    dispatch(addGraduation());
  };

  const handleAddPostGrad = () => {
    dispatch(addPostGraduation());
  };

  return (
    <div>
      <form className="edu flex justify-evenly">
        <div>
          <div>
            <h3 className="text-xl font-medium text-black-700 mb-2 mt-8">
              Class 12 Passing Details*
            </h3>
          </div>
          <div>
            <label htmlFor="yearPass12">Year Of Passing: </label>
            <br />
            <input
              type="number"
              name="yearPass12"
              value={educationFormData.yearPass12}
              className="border w-[100%]"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="schoolName12">School Name: </label>
            <br />
            <input
              type="text"
              name="schoolName12"
              value={educationFormData.schoolName12}
              className="border w-[100%]"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="cgpaPercent12">CGPA/Percentage: </label>
            <br />
            <input
              type="number"
              name="cgpaPercent12"
              value={educationFormData.cgpaPercent12}
              className="border w-[100%]"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
                <p>Document Upload:</p>
                <div class="custom-file-input">
                  <input
                    name="doc12"
                    type="file"
                    id="fileInput12"
                    class="input-file"
                    onChange={(e) => handleInputChange(e)}
                  />
                  <label for="fileInput12" class="file-label">
                    Choose a file
                  </label>
                </div>
                {educationFormData.doc12 ? (
                  <AiTwotoneFilePdf className="text-blue-700 w-10 text-5xl" />
                ) : (
                  ""
                )}
              </div>
        </div>
        <div>
          <div>
            <h3 className="text-xl font-medium text-black-700 mb-2 mt-8">
              Graduation Details*
            </h3>
          </div>
          {educationFormData?.graduation?.map((grad, setIndex) => (
            <div key={setIndex}>
              {setIndex > 0 ? (
                <div>
                  <h4 className="text-xl font-medium text-black-700 mb-2 mt-2">
                    Graduation {setIndex + 1}
                  </h4>
                </div>
              ) : (
                ""
              )}
              <div>
                <label htmlFor="gradYear">Year Of Passing: </label>
                <br />
                <input
                  type="number"
                  name={`gradYear`}
                  value={grad.gradYear}
                  className="border w-[100%]"
                  onChange={(e) => handleInputChange(e, setIndex)}
                  required
                />
                {/* {console.log(grad.gradYear)} */}
              </div>
              <div>
                <label htmlFor="gradClg">College Name: </label>
                <br />
                <input
                  type="text"
                  name={`gradClg`}
                  value={grad.gradClg}
                  className="border w-[100%]"
                  onChange={(e) => handleInputChange(e, setIndex)}
                  required
                />
              </div>
              <div>
                <label htmlFor="cgpaPercentGrad">CGPA/Percentage:</label>
                <br />
                <input
                  type="number"
                  name={`cgpaPercentGrad`}
                  value={grad.cgpaPercentGrad}
                  className="border w-[100%]"
                  onChange={(e) => handleInputChange(e, setIndex)}
                  required
                />
              </div>
              <div>
                <p>Document Upload:</p>
                <div class="custom-file-input">
                  <input
                    name="docGrad"
                    type="file"
                    id="fileInputGrad"
                    class="input-file"
                    onChange={(e) => handleInputChange(e, setIndex)}
                  />
                  <label for="fileInputGrad" class="file-label">
                    Choose a file
                  </label>
                </div>
                {grad.docGrad ? (
                  <AiTwotoneFilePdf className="text-blue-700 w-10 text-5xl" />
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-5">
            <button
              type="primary"
              className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
              onClick={handleAddGrad}
            >
              Add
            </button>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h3 className="text-xl font-medium text-black-700 mb-2 mt-8">
                Post-Graduation Details
              </h3>
            </div>
            {educationFormData?.postGraduation?.map((postGrad, setIndex) => (
              <div key={setIndex}>
                {setIndex > 0 ? (
                  <div>
                    <h4 className="text-xl font-medium text-black-700 mb-2 mt-2">
                      Post-Graduation {setIndex + 1}
                    </h4>
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <label htmlFor="postGradYear">Year Of Passing: </label>
                  <br />
                  <input
                    type="number"
                    name="postGradYear"
                    value={postGrad.postGradYear}
                    className="border w-[100%]"
                    onChange={(e) => handleInputChange(e, setIndex)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="postGradClg">College Name: </label>
                  <br />
                  <input
                    type="text"
                    name="postGradClg"
                    value={postGrad.postGradClg}
                    className="border w-[100%]"
                    onChange={(e) => handleInputChange(e, setIndex)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cgpaPercentPostGrad">CGPA/Percentage:</label>
                  <br />
                  <input
                    type="number"
                    name="cgpaPercentPostGrad"
                    value={postGrad.cgpaPercentPostGrad}
                    className="border w-[100%]"
                    onChange={(e) => handleInputChange(e, setIndex)}
                    required
                  />
                </div>
                <div>
                <p>Document Upload:</p>
                <div class="custom-file-input">
                  <input
                    name="docPostGrad"
                    type="file"
                    id="fileInputPostGrad"
                    class="input-file"
                    onChange={(e) => handleInputChange(e, setIndex)}
                  />
                  <label for="fileInputPostGrad" class="file-label">
                    Choose a file
                  </label>
                </div>
                {postGrad.docPostGrad ? (
                  <AiTwotoneFilePdf className="text-blue-700 w-10 text-5xl" />
                ) : (
                  ""
                )}
              </div>
              </div>
            ))}
            {/* <label htmlFor="docPostGrad">Document Upload: </label>
            <input type="file"/> */}
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="primary"
              className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
              onClick={handleAddPostGrad}
            >
              Add
            </button>
          </div>
        </div>
      </form>
      {isFilled ? (
        <div className="flex justify-center m-2 mt-10">
          <button
            type="primary"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={handleNextButton}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="flex justify-center m-2 mt-10">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
            Submit
          </button>
        </div>
      )}
      <div className="flex justify-center m-2">
        <button
          type="primary"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={prev}
        >
          Prev
        </button>
      </div>
    </div>
  );
};
