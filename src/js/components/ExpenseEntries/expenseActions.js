export function updateExpenseDescription(description) {
    return {
        type: "UPDATE_EXPENSE_DESCRIPTION",
        payload: { description }
    };
}

export function updateExpenseAmount(amount) {
    return {
        type: "UPDATE_EXPENSE_AMOUNT",
        payload: { amount }
    };
}

export function addExpense(description, amount) {
    return {
        type: "ADD_EXPENSE",
        payload: {
            description,
            amount: parseFloat(amount)
        }
    };
}

export function deleteExpense(index) {
    return {
        type: "DELETE_EXPENSE",
        payload: { index }
    }
}

export function editExpense(index) {
    return {
        type: "EDIT_EXPENSE",
        payload: { index }
    }
}