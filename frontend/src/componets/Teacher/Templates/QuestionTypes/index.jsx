import React from "react";
import QuestionType from "../QuestionType";
import { useSelector } from "react-redux";
import { templateSelector } from "../../../../store/features/template/selectors";

const QuestionTypes = () => {
  const { questionTypes = [] } = useSelector(templateSelector);

  if (questionTypes.length === 0) return null;

  return (

    <div>
      <div className="flex flex-col gap-2 my-4">
        {questionTypes.map((_, index) => (
          <QuestionType key={index} index={index} />
        ))}
      </div>
    </div>
    
  );
};

export default QuestionTypes;
