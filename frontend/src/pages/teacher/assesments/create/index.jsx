import React, { useState } from "react";
import { useHeading } from "../../../../hooks";
import CustomInput from "../../../../componets/common/inputs/CustomInput";
import { InputTypes } from "../../../../componets/common/inputs/CustomInput/types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";
import { setAssesmentKey } from "../../../../store/features/assesments/assesmentSlice";

const CreateAssesmentPage = () => {
  
  const {title ,description , template } = useSelector(assesmentsSelector);
  const dispatch = useDispatch();
  
  const { setHeading, setSubheading } = useHeading();

  setHeading("Assesment Page");
  setSubheading("Create new assignment here");

  function handleChange(key , value){
    dispatch(setAssesmentKey({key,value}));
  }

  return (
    <div>
      <form className="flex flex-col gap-4">
        <CustomInput
          inputType={InputTypes.DROPDOWN}
          label="Select Templates"
          value={template || "Choose from Templtes"}
          onChange = {(value)=>handleChange("template",value)}
        />
        <CustomInput
          inputType={InputTypes.TEXT}
          label="Assesment Title"
          value = {title}
          onChange = {(value)=>handleChange("title",value)}
          placeholder="Enter the title of Assesment"
        />
         <CustomInput
          inputType={InputTypes.MULTILINE}
          label="Assesment Description"
          value = {description}
          onChange = {(value)=>handleChange("description",value)}
          placeholder="Eg. MathQuiz"
        />


      </form>
    </div>
  );
};

export default CreateAssesmentPage;
