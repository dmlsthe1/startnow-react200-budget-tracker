const defaultState = {
    description: "",
    amount: "",
    lineItems: []
};

export default function IncomeReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case "UPDATE_INCOME_DESCRIPTION": {
            return {
                ...state,
                description: payload.description
            };
        }

        case "UPDATE_INCOME_AMOUNT": {
            return {
                ...state,
                amount: payload.amount
            };
        }

        case "ADD_INCOME": {
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

        case "DELETE_INCOME": {
            var lineItems = [...state.lineItems];
            lineItems.splice(action.payload.index, 1);
            return {
                ...state,
                lineItems
            }
        }

        case "EDIT_INCOME": {
            var index = action.payload.index;
            var lineItems = [...state.lineItems];
            lineItems[index].editable = true;
            return {
                ...state,
                lineItems
            }
        }

        case "SAVE_EDIT": {
            var {index, description, amount} = action.payload;
            var lineItems = [...state.lineItems];
            var newLineItem = {
                editable: false,
                description,
                amount
            }
            lineItems.splice(index, 1, newLineItem);
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