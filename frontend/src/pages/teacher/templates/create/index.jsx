import React from 'react'
import { useHeading } from '../../../../hooks'
import { InputTypes } from '../../../../componets/common/inputs/CustomInput/types';
import CustomInput from '../../../../componets/common/inputs/CustomInput';
import TemplatesBasicDetailsForm from '../../../../componets/Teacher/Templates/BasicDetailsForm';


const CreateTemplatePage = () => {

    const {setHeading ,setSubheading}  = useHeading();

    setHeading("Template Page")
    setSubheading("Create assignment here");

  return (
     <div>
      <TemplatesBasicDetailsForm />
    </div>
  )
}

export default CreateTemplatePage