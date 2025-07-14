import React from 'react'
import CustomTable from '../../../componets/common/CustomTable'
import { useTemplatesData } from './hooks'
import { templateColumns } from './utils'

const TeacherTemplates = () => {
  
  const { rows = [], actions = [] } = useTemplatesData();

  return (
    <div>
      <CustomTable columns={templateColumns} data={rows} actions={actions}/>
    </div>
  )
}

export default TeacherTemplates