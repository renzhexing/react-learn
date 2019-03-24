const defaultState = {
    inputValue: '',
    list: []
};
export default (state=defaultState,action)=>{
    console.log(state, action)
    if(action.type === 'change_input_value'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    };

    if(action.type === 'add_todo_item') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    return state;
}