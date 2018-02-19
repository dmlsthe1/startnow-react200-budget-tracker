const defaultState = {
    description: "",
    amount: "",
    lineItems: []
};

export default function ExpenseReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case "UPDATE_EXPENSE_DESCRIPTION": {
            return {
                ...state,
                description: payload.description
            };
        }

        case "UPDATE_EXPENSE_AMOUNT": {
            return {
                ...state,
                amount: payload.amount
            };
        }

        case "ADD_EXPENSE": {
            const { description, amount } = action.payload;
            return {
                description: "",
                action: "",
                lineItems: [
                    ...state.lineItems,
                    { description, amount }
                ]
            };
        }

        case "DELETE_EXPENSE": {
            const { index } = action.payload;
            const lineItems = [...state.lineItems];
            lineItems.splice(index, 1);
            return {
                ...state,
                lineItems
            }
        }

        case "EDIT_EXPENSE": {
            const { index } = action.payload;
            const lineItems = [...state.lineItems];
            const edit = lineItems.splice(index, 1);
            // document.getElementById("expense-description").value = edit[0].description;
            // document.getElementById("expense-amount").value = edit[0].amount;
            return {
                ...state,
                lineItems
            }
        }

        default: {
            return state;
        }
    }
    return state;
}