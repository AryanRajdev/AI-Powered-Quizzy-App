import React, { useState } from "react";
import { useHeading } from "../../../../hooks";
import TemplatesBasicDetailsForm from "../../../../componets/Teacher/Templates/create/BasicDetailsForm";
import AddQuestionType from "../../../../componets/Teacher/Templates/create/AddQuestionType";
import QuestionTypes from "../../../../componets/Teacher/Templates/QuestionTypes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const CreateTemplatePage = () => {
  const { setHeading, setSubheading } = useHeading();

  setHeading("Template Page");
  setSubheading("Create assignment here");



  return (
    <div>
      <TemplatesBasicDetailsForm />
      <hr className="my-4" />

      <QuestionTypes />


      <AddQuestionType />
      
      
    </div>
  );
};

export default CreateTemplatePage;
