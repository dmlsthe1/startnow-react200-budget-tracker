export function updateIncomeDescription(description) {
    return {
        type: "UPDATE_INCOME_DESCRIPTION",
        payload: { description }
    };
}

export function updateIncomeAmount(amount) {
    return {
        type: "UPDATE_INCOME_AMOUNT",
        payload: { amount }
    };
}

export function addIncome(description, amount) {
    return {
        type: "ADD_INCOME",
        payload: {
            description,
            amount: parseFloat(amount)
        }
    };
}

export function deleteIncome(index){
    return {
        type: "DELETE_INCOME",
        payload: { index }
    }
}

export function editIncome(index){
    return {
        type: "EDIT_INCOME",
        payload: { index }
    }
}

export function saveEdit(index, description, amount){
    return {
        type: "SAVE_EDIT", 
        payload: { 
            index,
            description,
            amount: parseFloat(amount)
        }
    }
}

export function editChange(index, id, value){
    return {
        type: "EDIT_CHANGE",
        payload: {
            index,
            id,
            value
        }
    }
}