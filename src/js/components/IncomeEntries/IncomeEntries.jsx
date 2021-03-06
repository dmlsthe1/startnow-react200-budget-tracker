import React from "react";

import {
    updateIncomeDescription,
    updateIncomeAmount,
    addIncome,
    deleteIncome,
    editIncome,
    saveEdit,
    editChange
} from "./incomeActions";

export default class IncomeEntries extends React.Component {
    constructor(props) {
        super(props);

        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handleAmountInput = this.handleAmountInput.bind(this);
        this.handleAddIncome = this.handleAddIncome.bind(this);
        this.handleDeleteIncome = this.handleDeleteIncome.bind(this);
        this.handleEditIncome = this.handleEditIncome.bind(this);
        this.handleSaveEdit = this.handleSaveEdit.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
    }

    handleDescriptionInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateIncomeDescription(value));
    }

    handleAmountInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateIncomeAmount(value));
    }

    handleAddIncome(e) {
        e.preventDefault();
        e.target.reset();
        const { description, amount, dispatch } = this.props;
        if (!description || !amount ) {
            return alert("Please enter values into the description and amount fields");
        }
        dispatch(addIncome(description, amount));
    }

    handleDeleteIncome(e) {
        const { dispatch } = this.props;
        const index = e.target.dataset.index;
        dispatch(deleteIncome(index));
    }

    handleEditIncome(e) {
        const { dispatch } = this.props;
        const index = e.target.dataset.index;
        dispatch(editIncome(index));
    }

    handleSaveEdit(e) {
        const { dispatch } = this.props;
        const index = e.target.dataset.index;
        dispatch(saveEdit(index));
    }
    
    handleEditChange(e) {
        const {dispatch} = this.props;
        var {id, value} = e.target;
        const index = e.target.dataset.index;
        dispatch(editChange(index, id, value));
    }

    render() {
        const { description, amount, lineItems } = this.props;
        return (
            <div className="card border-success mb-3">
                <div className="card-header text-white bg-success">Income Entries</div>
                <div className="card-body">
                    <form onSubmit={this.handleAddIncome}>
                        <div className="form-group">
                            <label htmlFor="income-description">Description</label>
                            <input  
                                type="text"
                                className="form-control"
                                id="income-description"
                                onChange={this.handleDescriptionInput}
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
                            className="btn btn-success col-12 mb-5"
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
                                { lineItems && lineItems.map((lineItem, index) => (
                                    !lineItem.editable ?
                                    <tr key={index}>
                                        <td>{lineItem.description}</td>
                                        <td>${lineItem.amount.toFixed(2)}</td>
                                        <td><div id="flex">
                                            <button type="button" data-index={index} onClick={this.handleEditIncome}>Edit</button>
                                            <button type="button" data-index={index} onClick={this.handleDeleteIncome}>Delete</button>
                                        </div></td>
                                    </tr>:
                                    <tr key={index}>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="income-description">Description</label>
                                                <input  
                                                    data-index={index}
                                                    type="text"
                                                    className="form-control"
                                                    id={'description'}
                                                    defaultValue={lineItem.description}
                                                    onChange={this.handleEditChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="income-amount">Amount</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">$</span>
                                                    <input 
                                                        data-index={index}
                                                        type="text"
                                                        className="form-control"
                                                        id={'amount'}
                                                        defaultValue={`$${lineItem.amount.toFixed(2)}`}
                                                        onChange={this.handleEditChange}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td id="td-save"><button type="button" id="btn-save" data-index={index} onClick={this.handleSaveEdit}>Save</button></td>
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