export const templateToState = (template)=>{
    return {
        ...template,
        QuestionTypes : template?.map((template)=>({
            type : template.type,
            data :{
                ...template,
                options : template.metadata,
            }
        }))
    }
}