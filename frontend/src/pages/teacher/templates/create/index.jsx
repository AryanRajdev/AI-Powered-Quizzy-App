import React, { useState } from "react";
import { useHeading } from "../../../../hooks";
import { InputTypes } from "../../../../componets/common/inputs/CustomInput/types";
import CustomInput from "../../../../componets/common/inputs/CustomInput";
import TemplatesBasicDetailsForm from "../../../../componets/Teacher/Templates/BasicDetailsForm";
import CustomDropdown from "../../../../componets/common/CustomDropdown";
import CustomDropdownInput from "../../../../componets/common/inputs/CustomdropdownInput";
import { PlusIcon } from "lucide-react";
import { questionOptions } from "../../../../utils/questionOptions";

const CreateTemplatePage = () => {
  const { setHeading, setSubheading } = useHeading();

  setHeading("Template Page");
  setSubheading("Create assignment here");

  const [questionType , setQuestionType] = useState(null);

  return (
    <div>
      <TemplatesBasicDetailsForm />
      <hr className="my-4" />

      <CustomInput
        InputTypes={InputTypes.DROPDOWN}
        value={questionType}
        onChange = {setQuestionType}
        options = {questionOptions}
        label={
          <div className="flex items-center gap-2 text-sm">
            <PlusIcon size={15} />
            Add Question Type{" "}
          </div>
        }
      />
    </div>
  );
};

export default CreateTemplatePage;
