export const PAY = 'PAY';

export const pay = (prod) => {
    return {
        type: PAY,
        payload:prod
    };
};