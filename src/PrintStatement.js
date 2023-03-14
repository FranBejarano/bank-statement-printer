import chalk from "chalk";
export default class PrintStatement {

    static printHeader() {
        console.log(`date       || credit  || debit   || balance`);
    };

    static printTransaction(transaction, emptyCell) {
        console.log(transaction.Date +
            PrintStatement.addColumn() +
            chalk.green(PrintStatement.formatCash(transaction.CreditAccount, emptyCell)) +
            PrintStatement.addColumn() +
            chalk.red(PrintStatement.formatCash(transaction.DebitAccount, emptyCell)) +
            PrintStatement.addColumn() +
            chalk.green(PrintStatement.formatCash(transaction.CurrentBalance)));
    };

    static printStatement(listOfTransactions) {
        let emptyCell = PrintStatement.findPadding(listOfTransactions);
        PrintStatement.printHeader();
        const reverseArray = listOfTransactions.reverse();
        for (let i = 0; i < reverseArray.length; i++) {
            this.printTransaction(reverseArray[i], emptyCell);
        }
    };

    static addColumn() {
        return " || ";
    };

    static formatCash(amount, emptyCell) {
        let spaces = " ";
        if (amount == 0) {
            for (let i = 0; i < emptyCell + 2; i++) {
                spaces += " ";
            }
            return spaces;
        }
        else if (amount.toString().length < emptyCell) {
            emptyCell -= amount.toString().length;
            for (let i = 0; i < emptyCell - 1; i++) {
                spaces += " ";
            }
            return spaces.concat(Number.parseFloat(amount).toFixed(2));
        }
        if (amount < 0) {
            return chalk.red(Number.parseFloat(amount).toFixed(2));
        }
        return Number.parseFloat(amount).toFixed(2);
    };

    static findPadding(listOfTransactions) {
        let emptyCell = 0;
        for (let i = 0; i < listOfTransactions.length; i++) {
            if (listOfTransactions[i].CreditAccount.toString().length > emptyCell) {
                emptyCell = listOfTransactions[i].CreditAccount.toString().length;
            };
            if (listOfTransactions[i].DebitAccount.toString().length > emptyCell) {
                emptyCell = listOfTransactions[i].DebitAccount.toString().length;
            };
        };
        return emptyCell;
    }
}