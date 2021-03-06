import React from "react";

import {
    updateExpenseDescription,
    updateExpenseAmount,
    addExpense,
    deleteExpense,
    editExpense
} from "./expenseActions";

export default class ExpenseEntries extends React.Component {
    constructor(props) {
        super(props);

        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handleAmountInput = this.handleAmountInput.bind(this);
        this.handleAddExpense = this.handleAddExpense.bind(this);
        this.handleDeleteExpense = this.handleDeleteExpense.bind(this);
        this.handleEditExpense = this.handleEditExpense.bind(this);
    }

    handleDescriptionInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateExpenseDescription(value));
    }

    handleAmountInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateExpenseAmount(value));
    }

    handleAddExpense() {
        const { description, amount, dispatch } = this.props;
        if (!description || !amount ) {
            return alert("Please enter values into the description and amount fields");
        }
        document.getElementById("expense-description").value = "";
        document.getElementById("expense-amount").value = "";
        dispatch(addExpense(description, amount));
    }

    handleDeleteExpense(e) {
        const { dispatch } = this.props;
        const index = e.target.parentNode.dataset.index;
        dispatch(deleteExpense(index));
    }

    handleEditExpense(e) {
        const { dispatch } = this.props;
        const index = e.target.parentNode.dataset.index;
        dispatch(editExpense(index));
    }

    render() {
        const { description, amount, lineItems } = this.props;
        return (
            <div className="card border-danger mb-3">
                <div className="card-header text-white bg-danger">Expense Entries</div>
                <div className="card-body">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="expense-description">Description</label>
                            <input  
                                type="text"
                                className="form-control"
                                id="expense-description"
                                onChange={this.handleDescriptionInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expense-amount">Amount</label>
                            <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="expense-amount"
                                    onChange={this.handleAmountInput}
                                />
                            </div>
                        </div>
                        <button
                            className="btn btn-danger col-12 mb-5"
                            type="button"
                            onClick={this.handleAddExpense}
                        >+ Add Expense
                        </button>
                        <table className="table table-sm table-hover">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th style={ {width:120} }>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lineItems.map((lineItem, index) => (
                                    <tr onClick={this.handleEditExpense} data-index={index} key={index}>
                                        <td>{lineItem.description}</td>
                                        <td>${lineItem.amount.toFixed(2)}</td>
                                    </tr>
                                ))}    
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        )
    }
}