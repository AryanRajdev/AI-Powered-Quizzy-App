import React from "react";
import CustomTable from "../../../componets/common/CustomTable";
import { assesmentColumns } from "./utils";
import { useHeading } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { useAssesmentsData } from "./hooks";
import CustomButton from "../../../componets/common/CustomButton";
import { PlusIcon } from "lucide-react";

const TeacherAssesmentsPage = () => {
  const { setHeading, setSubheading } = useHeading();
  const navigate = useNavigate();

  setHeading("Assesments");
  setSubheading("Create and manage your assesments here");

  const { rows = [], actions = [] } = useAssesmentsData();

  function handleClick(){
    navigate("/teacher/assesments/create");
  }

  return (
    <div>
      <div className="mb-2">
        <CustomButton onClick={handleClick}>
          <PlusIcon size={20} /> Create Assesment
        </CustomButton>
      </div>
      <CustomTable columns={assesmentColumns} data={rows} actions={actions} />
    </div>
  );
};

export default TeacherAssesmentsPage;
