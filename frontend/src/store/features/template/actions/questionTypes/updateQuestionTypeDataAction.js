export const updateQuestionTypeDataAction = (state , {payload})=>{

    const {id , key ,value} = payload;

    const questionType = state.questionTypes[id];

    if(!questionType) return;
    
    questionType.data[key] = value;

};