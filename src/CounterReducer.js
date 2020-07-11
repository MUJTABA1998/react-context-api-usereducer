const counterReducer = (state,action) =>{
    switch (action) {
        case 'INCREAMENT':
            return state + 1
        case 'DCREAMENT':
            return state - 1
    }
}

export default counterReducer;