import React from "react";

import {
    updateIncomeDescription,
    updateIncomeAmount,
    addIncome
} from "./incomeActions";

export default class IncomeEntries extends React.Component {
    constructor(props) {
        super(props);

        this.handeDescriptionInput = this.handeDescriptionInput.bind(this);
        this.handleAmountInput = this.handleAmountInput.bind(this);
        this.handleAddIncome = this.handleAddIncome.bind(this);
    }

    handeDescriptionInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateIncomeDescription(value));
    }

    handleAmountInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateIncomeAmount(value));
    }

    handleAddIncome() {
        const { description, amount, dispatch } = this.props;
        dispatch(addIncome(description, amount));
    }

    render() {
        const { description, amount, lineItems } = this.props;
        return (
            <div className="card border-danger mb-3">
                <div className="card-header text-white bg-danger">Income Entries</div>
                <div className="card-body">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="income-description">Description</label>
                            <input  
                                type="text"
                                className="form-control"
                                id="income-description"
                                onChange={this.handeDescriptionInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="income-amount">Amount</label>
                            <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="income-amount"
                                    onChange={this.handleAmountInput}
                                />
                            </div>
                        </div>
                        <button
                            className="btn btn-danger col-12 mb-5"
                            type="button"
                            onClick={this.handleAddIncome}
                        >+ Add Income
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
                                    <tr key={index}>
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