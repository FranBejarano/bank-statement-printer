export default class BankAccount {

    #currentBalance = 0;
    #listOfTransactions = [];

    get CurrentBalance() {
        return this.#currentBalance;
    };

    get ListOfTransactions() {
        return this.#listOfTransactions;
    };

    addTransaction(transaction) {
        this.#listOfTransactions = [...this.#listOfTransactions, transaction];
        this.balanceAfterTransaction(transaction);
    };

    balanceAfterTransaction(transaction) {
        this.#currentBalance += transaction.CreditAccount - transaction.DebitAccount;
        transaction.CurrentBalance = this.#currentBalance;
    };
}