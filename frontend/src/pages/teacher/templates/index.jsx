import React from 'react'
import CustomTable from '../../../componets/common/CustomTable'
import { useTemplatesData } from './hooks'
import { templateColumns } from './utils'
import { useHeading } from '../../../hooks'


const TeacherTemplates = () => {

  const { setHeading, setSubheading } = useHeading();
  setHeading("Templates");
  setSubheading("This is the place where you can manage your templates");
  
  const { rows = [], actions = [] } = useTemplatesData();

  return (
    <div>
      <CustomTable columns={templateColumns} data={rows} actions={actions}/>
    </div>
  )
}

export default TeacherTemplates