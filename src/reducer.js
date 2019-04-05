const reduser = (state, action) =>{

    switch(action.type){
        case 'ADDSMALLDEAL':
            return console.log(state);
        case 'ADDSMALLDEAL1':
            return console.log(state  + '123');
        default: 
            return state;
    }
};
export default reduser;