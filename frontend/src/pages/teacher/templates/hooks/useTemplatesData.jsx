import { EyeIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import { EditIcon } from "lucide-react";

export const useTemplatesData = () => {

  const rows = [
   
  ]
  const actions = [
    {
      icon: <EyeIcon size={20} className="text-green-500" />,
      onClick: (row) => {
        navigate(`/teacher/templates/${row._id}`);
      },
    },
    {
      icon: <EditIcon size={20} className="text-blue-500" />,
      onClick: () => {
        alert("Edit is coming soon!");
      },
    },
    {
      icon: <TrashIcon size={20} className="text-red-500" />,
      onClick: (row) => {
        triggerDelete(row._id);
      },
    },
  ];

  return {
    rows,
    actions,
  };

};
