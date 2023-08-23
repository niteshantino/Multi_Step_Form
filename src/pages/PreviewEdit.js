import React from "react";
import { useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";

const PreviewEdit = ({ setCurrent }) => {
  const personalFormData = useSelector((state) => state.form.formData.personal);
  const coAddressFormData = useSelector(
    (state) => state.form.formData.coAddress
  );
  const perAddressFormData = useSelector(
    (state) => state.form.formData.perAddress
  );
  const educationFormData = useSelector(
    (state) => state.form.formData.educational
  );
  console.log(educationFormData);
  const handleEdit = (e) => {
    e.preventDefault();
    if (e.target.id === "editPers") {
      setCurrent(0);
    } else if (e.target.id === "editAddress") {
      setCurrent(1);
    } else {
      setCurrent(2);
    }
  };
  console.log("hello", "sdfghj");
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold text-black-600 mb-4">
        Personal Details
      </h2>
      <section className="persPrev bg-[whitesmoke] p-10 flex justify-between">
        <div>
          <div className="mb-1">
            <b>Name: </b>
            <span>{personalFormData.name} </span>
          </div>
          <div className="mb-1">
            <b>Email: </b>
            <span> {personalFormData.email} </span>
          </div>
          <div className="mb-1">
            <b>Date Of Birth: </b>
            <span>{personalFormData.dob} </span>
          </div>
          <div className="mb-1">
            <b>Father Name: </b>
            <span> {personalFormData.fatherName}</span>
          </div>
          <div className="mb-1">
            <b>Mother Name: </b>
            <span> {personalFormData.motherName}</span>
          </div>
          <div className="mb-1">
            <b>Gender: </b>
            <span>{personalFormData.gender}</span>
          </div>
          <div className="mb-1">
            <b>Mobile Number: </b>
            <span>{personalFormData.mobileNumber} </span>
          </div>
          <div className="mb-1">
            <b>Languages Known: </b>
            <span> {personalFormData.languages}</span>
          </div>
        </div>
        <div>
          <button
            id="editPers"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer mt-5"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      </section>

      <h2 className="text-center text-3xl font-semibold text-black-600 m-5">
        Address Details
      </h2>
      <section className="addPrev flex justify-between bg-[whitesmoke] p-10">
        <div className="mb-5">
          <h2 className="text-2xl font-medium text-black-700 mb-2">
            Correspondence Address Details
          </h2>
          <div>
            <b>Address Line 1: </b>
            <span>{coAddressFormData.coAddressLine1} </span>
          </div>
          <div>
            <b>Address Line 2: </b>
            <span> {coAddressFormData.coAddressLine2} </span>
          </div>
          <div>
            <b>State: </b>
            <span>{coAddressFormData.coState} </span>
          </div>
          <div>
            <b>Pincode: </b>
            <span> {coAddressFormData.coPincode}</span>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-medium text-black-700 mb-2">
            Permanent Address Details
          </h2>
          <div>
            <b>Address Line 1: </b>
            <span>{perAddressFormData.perAddressLine1} </span>
          </div>
          <div>
            <b>Address Line 2: </b>
            <span> {perAddressFormData.perAddressLine2} </span>
          </div>
          <div>
            <b>State: </b>
            <span>{perAddressFormData.perState} </span>
          </div>
          <div>
            <b>Pincode: </b>
            <span> {perAddressFormData.perPincode}</span>
          </div>
        </div>
        <div>
          <button
            id="editAddress"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer mt-5"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      </section>
      <h3 className="text-center text-3xl font-semibold text-black-600 m-5">
        Educational Details
      </h3>
      <section className="eduPrev bg-[whitesmoke] p-10 flex justify-between">
        <div>
          <h2 className="text-2xl font-medium text-black-700 mb-2 mt-5">
            Class 12
          </h2>
          <div>
            <b>Passing Year </b>
            <span>{educationFormData.yearPass12} </span>
          </div>
          <div>
            <b>School Name: </b>
            <span>{educationFormData.schoolName12}</span>
          </div>
          <div>
            <b>Percentage: </b>
            <span>{educationFormData.cgpaPercent12} </span>
          </div>
          <div>
            <b>Uploaded Document: </b>
            {educationFormData.doc12 ? (
              <a
                href={educationFormData.doc12}
                target="_blank"
                rel="noreferrer"
              >
                {/* <img
                  className="mt-2 overflow-hidden"
                  src={educationFormData.doc12}
                  name="doc12"
                  width={"100px"}
                  height={"100px"}
                  alt="educationFormData.doc12"
                /> */}

                <div className="inline-block">
                  <FaEye className="text-blue-700 w-10 text-lg" />
                </div>
              </a>
            ) : (
              ""
            )}
            {/* <a href={educationFormData.doc12} target="_blank" rel="noreferrer">
              <img
                className="mt-2"
                src={educationFormData.doc12}
                width={"100px"}
                height={"100px"}
                alt="educationFormData.doc12"
              />
            </a> */}
          </div>
        </div>
        {/* graduation starts */}
        <div>
          <h2 className="text-2xl font-medium text-black-700 mb-2 mt-5">
            Graduation
          </h2>
          {educationFormData?.graduation?.map((grad, index) => {
            return (
              <div key={index}>
                {/* {console.log(grad, "mnbvcx")} */}
                {index > 0 ? (
                  <div>
                    <h4 className="text-xl font-medium text-black-700 mb-2 mt-2">
                      Graduation {index + 1}
                    </h4>
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <b>Passing Year </b>
                  <span>{grad.gradYear} </span>
                </div>
                <div>
                  <b>School Name: </b>
                  <span>{grad.gradClg} </span>
                </div>
                <div>
                  <b>Percentage: </b>
                  <span>{grad.cgpaPercentGrad} </span>
                </div>
                <div>
                  {/* {console.log(educationFormData.doc12,"qwertyuioiu")} */}
                  <b>Uploaded Document: </b>
                  {/* {console.log(grad.docGrad, "ertqwertyuicvb")} */}
                  <a href={grad.docGrad} target="_blank" rel="noreferrer">
                    <div className="inline-block">
                      <FaEye className="text-blue-700 w-10 text-lg" />
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        {educationFormData?.postGraduation?.[0].postGradYear ? (
          <div>
            <h2 className="text-2xl font-medium text-black-700 mb-2 mt-5">
              Post-Graduation
            </h2>
            {educationFormData?.postGraduation?.map((postGrad, index) => (
              <div key={index}>
                {index > 0 ? (
                  <div>
                    <h4 className="text-xl font-medium text-black-700 mb-2 mt-2">
                      Post-Graduation {index + 1}
                    </h4>
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <b>Passing Year </b>
                  <span>{postGrad.postGradYear} </span>
                </div>
                <div>
                  <b>School Name: </b>
                  <span>{postGrad.postGradClg}</span>
                </div>
                <div>
                  <b>Percentage: </b>
                  <span>{postGrad.cgpaPercentPostGrad} </span>
                </div>
                <div>
                  <b>Uploaded Document: </b>

                  <a
                    href={postGrad.docPostGrad}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="inline-block">
                      <FaEye className="text-blue-700 w-10 text-lg" />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        <div>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer mt-5"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      </section>
    </div>
  );
};

export default PreviewEdit;
