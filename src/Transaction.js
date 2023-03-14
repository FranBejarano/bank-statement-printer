export default class Transaction {

    #currentBalance;
    #creditAccount;
    #debitAccount;
    #date;

    constructor(date, amount, transactionType) {

        this.#date = date;

        if (transactionType === 'creditAccount') {

            this.#creditAccount = amount;
            this.#debitAccount = 0;
        }
        if (transactionType === 'debitAccount') {

            this.#creditAccount = 0;
            this.#debitAccount = amount;
        }

    };

    get Date() {
        return this.#date;
    };

    get CreditAccount() {
        return this.#creditAccount;
    };

    get DebitAccount() {
        return this.#debitAccount;
    };

    get CurrentBalance() {
        return this.#currentBalance;
    }

    set CurrentBalance(cash) {
        this.#currentBalance = cash;
    }
}