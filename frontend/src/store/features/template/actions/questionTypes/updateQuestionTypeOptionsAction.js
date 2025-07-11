export const updateQuestionTypeOptionsAction = (state , {payload})=>{
    const {id , key , value} = payload;

    const questionType = state.questionTypes[id];

    if(!questionType) return;

    questionType.data.options[key] = value;
}