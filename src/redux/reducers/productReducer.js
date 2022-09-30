const init = {
    products: []
}

const productReducer = (state=init, action) => {
   
    switch (action.type) {
        case 'products/add':
            
        return {
            ...state,
            products: state.products.concat(action.payload)
        }

        case 'products/update':
        return {
            ...state,
            products: []
        }

        default: 
        return state;        
    }

}

export default productReducer;