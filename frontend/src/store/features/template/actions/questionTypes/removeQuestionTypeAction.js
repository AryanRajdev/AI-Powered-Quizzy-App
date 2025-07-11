export const removeQuestionTypeAction = (state , {payload})=>{
    const {id} = payload;
    
    state.questionTypes.splice(id,1);
}