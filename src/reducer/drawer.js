import Types from 'constants';

const {
    OPEN_DRAWER,
    CLOSE_DRAWER
} = Types;

const initialState = {
    isDrawerOpen: false
}

export default function drawer(state=initialState,actions) {
    const {isDrawerOpen} = actions;
    switch(actions.type){
        case OPEN_DRAWER:
            return {...state,isDrawerOpen};
        case CLOSE_DRAWER:
            return {...state,isDrawerOpen};
        default:
            return {...state};
    }
}