import React from 'react'
import CustomTable from '../../../componets/common/CustomTable'
import { useTemplatesData } from './hooks'
import { templateColumns } from './utils'
import { useHeading } from '../../../hooks'
import CustomButton from '../../../componets/common/CustomButton'
import { PlusIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const TeacherTemplates = () => {

  const { setHeading, setSubheading } = useHeading();
  const navigate = useNavigate();
  setHeading("Templates");
  setSubheading("This is the place where you can manage your templates");
  
  const { rows = [], actions = [] } = useTemplatesData();

  function handleClick(){
    navigate("/teacher/templates/create");
  }

  return (
    <div>
      <div className="mb-2">
        <CustomButton onClick={handleClick}>
          <PlusIcon size={20} /> Create Assesment
        </CustomButton>
      </div>
      <CustomTable columns={templateColumns} data={rows} actions={actions}/>
    </div>
  )
}

export default TeacherTemplates