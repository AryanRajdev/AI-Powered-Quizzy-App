import React from "react";
import CustomTable from "../../../componets/common/CustomTable";
import { assesmentColumns } from "./utils";
import { useHeading } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { useAssesmentsData } from "./hooks";

const TeacherAssesmentsPage = () => {
  const { setHeading, setSubheading } = useHeading();
  const navigate = useNavigate();

  setHeading("Assesments");
  setSubheading("Create and manage your assesments here");

  const { rows = [], actions = [] } = useAssesmentsData();

  return (
    <div>
      <CustomTable columns={assesmentColumns} data={rows} actions={actions} />
    </div>
  );
};

export default TeacherAssesmentsPage;
