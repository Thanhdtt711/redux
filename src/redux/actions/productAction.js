export const doAddProduct = (data) => {
    return {
        type: 'products/add',
        payload: data
    }
}
