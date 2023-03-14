import BankAccount from "./src/BankAccount.js";
import Transaction from "./src/Transaction.js";
import PrintStatement from "./src/PrintStatement.js";

let transaction;
const bankAccount = new BankAccount(transaction);

console.log("*** Transaction tests ***");
transaction = new Transaction("29/01/2023", 1000, "creditAccount");
console.log(transaction.Date);
console.log(transaction.CreditAccount);
console.log(transaction.DebitAccount);

transaction = new Transaction("29/01/2023", 1000, "debitAccount");
console.log(transaction.Date);
console.log(transaction.CreditAccount);
console.log(transaction.DebitAccount);

console.log("\n*** BankAccount tests ***");
console.log(bankAccount.CurrentBalance);
console.log(bankAccount.ListOfTransactions.length);
bankAccount.addTransaction(transaction);
console.log(bankAccount.ListOfTransactions.length);
console.log(bankAccount.ListOfTransactions[0].Date);
console.log(transaction.Date);

transaction = new Transaction("29/01/2023", 1000, "creditAccount");
bankAccount.addTransaction(transaction);
console.log(bankAccount.ListOfTransactions);

const bankAccount2 = new BankAccount();
bankAccount2.addTransaction(new Transaction('10-01-2012', 1000, 'creditAccount'));
bankAccount2.addTransaction(new Transaction('13-01-2012', 2000, 'creditAccount'));
bankAccount2.addTransaction(new Transaction('14-01-2012', 500, 'debitAccount'));

console.log("\n*** PrintSratement tests ***");
PrintStatement.printStatement(bankAccount2.ListOfTransactions);