const initialeState = {selectedBook: null }

const bookReducer = (state = initialeState, action) => {
    switch (action.type) {
        case 'SELECT_BOOK':
            return {...state,selectedBook: action.value};
        default:
            return state;
    }
};

export  default bookReducer;