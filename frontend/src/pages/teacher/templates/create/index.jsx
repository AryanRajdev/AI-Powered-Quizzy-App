import React, { useState } from "react";
import { useHeading } from "../../../../hooks";
import TemplatesBasicDetailsForm from "../../../../componets/Teacher/Templates/create/BasicDetailsForm";
import AddQuestionType from "../../../../componets/Teacher/Templates/create/AddQuestionType";

const CreateTemplatePage = () => {
  const { setHeading, setSubheading } = useHeading();

  setHeading("Template Page");
  setSubheading("Create assignment here");



  return (
    <div>
      <TemplatesBasicDetailsForm />
      <hr className="my-4" />
      <AddQuestionType />
     
    </div>
  );
};

export default CreateTemplatePage;
