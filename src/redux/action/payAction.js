export const PAY = 'PAY';
export const DELETE = 'DELETE';
export const ALL = 'ALL';
export const pay = (prod) => {
    return {
        type: PAY,
        payload:prod
    };
};
export const deleteItem = (prod) => {
    return {
        type: DELETE,
        payload:prod
    };
};
export const all = () =>{
    return{
        type:ALL,
    };
}