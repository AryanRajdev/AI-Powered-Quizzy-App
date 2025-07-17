import React, { useState } from "react";
import { useHeading } from "../../../../hooks";
import TemplatesBasicDetailsForm from "../../../../componets/Teacher/Templates/create/BasicDetailsForm";
import AddQuestionType from "../../../../componets/Teacher/Templates/create/AddQuestionType";
import QuestionTypes from "../../../../componets/Teacher/Templates/QuestionTypes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetTemplateState } from "../../../../store/features/template/templateSlice";
import { useParams } from "react-router-dom";
import { useGetTemplateQuery } from "../../../../store/api";

const CreateTemplatePage = () => {
  
  const { id } = useParams;

  const { isLoading } = useGetTemplateQuery(id, {
    refetchOnMountOrArgChange: true,
    skip: !id,
  });

  const { setHeading, setSubheading } = useHeading();
  const dispatch = useDispatch();
  setHeading("Template Page");
  setSubheading("Create assignment here");

  useEffect(() => {
    return () => {
      dispatch(resetTemplateState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
