const getCategories = (products) => {
    let array = [];
    products?.map(item =>{
        if (!array.includes(item.category)) {
            array.push(item.category)
        }     
    })
    return array
}
export default getCategories


