import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: "form",
  initialState: {
    formData: {
      personal: {
        name: "",
        dob: "",
        email: "",
        fatherName: "",
        motherName: "",
        gender: "",
        mobileNumber: "",
        languages: [],
      },
      coAddress: {
        coAddressLine1: "",
        coAddressLine2: "",
        coState: "",
        coPincode: "",
      },
      perAddress: {
        perAddressLine1: "",
        perAddressLine2: "",
        perState: "",
        perPincode: "",
      },
      educational: {
        yearPass12: "",
        schoolName12: "",
        cgpaPercent12: "",
        doc12: "",

        graduation: [
          {
            gradYear: "",
            gradClg: "",
            cgpaPercentGrad: "",
            docGrad: "",
          },
        ],

        postGraduation: [
          {
            postGradYear: "",
            postGradClg: "",
            cgpaPercentPostGrad: "",
            docPostGrad: "",
          },
        ],
      },
    },
    currentStep: 2,
  },
  reducers: {
    setFormData: (state, action) => {
      const { section, field, value, setIndex, files } = action.payload;
      console.log({ section, field, value, setIndex, files }, "lkjhgfdsxcvbn")
      // console.log(files,"rtyuiop")
      if (section === "educational" && setIndex + 1) {
        if (field === "docGrad") {
          console.log(files, "graduationnnnnnnnnnn");
          state.formData.educational.graduation[setIndex][field] = files;
        } else {
          state.formData.educational.graduation[setIndex][field] = value;
        }
      } else if (section === "educational_postGraduation") {
        if (field === "docPostGrad") {
          console.log(files, "postgraddddddd");
          state.formData.educational.postGraduation[setIndex][field] = files;
        } else {
          state.formData.educational.postGraduation[setIndex][field] = value;
        }
      } else {
        if (field === "doc12") {
          // console.log(files, "class122222222");
          state.formData[section][field] = files;
        } else {
          state.formData[section][field] = value;
        }
        // console.log("csjksdlhvisdov", {section, field, files, value });
      }
    },

    // nextStep: (state) => {
    //   state.currentStep += 1;
    // },
    addGraduation: (state) => {
      state.formData.educational.graduation.push({
        gradYear: "",
        gradClg: "",
        cgpaPercentGrad: "",
        docGrad: "",
      });
    },
    addPostGraduation: (state) => {
      state.formData.educational.postGraduation.push({
        postGradYear: "",
        postGradClg: "",
        cgpaPercentPostGrad: "",
        docPostGrad: "",
      });
    },
  },
});

export const { setFormData, addGraduation, addPostGraduation } =
  FormSlice.actions;
export default FormSlice.reducer;
