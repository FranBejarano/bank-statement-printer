This branch tries to approach the challenge from a different perspective. The main branch attempts to perform bank operations from the `Transaction` class and include these operations in the array directly from the `BankAccount` class. This leads to a problem that is not easy to solve and to which not a few hours have been dedicated. That is why it has almost been made a clean slate and try to approach the challenge from another perspective. In the child branch (named "attempt2"), the `Transaction` class will be used as the base to build the object that will then be pushed to the transactions array in the `BankAccount` class.

# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

### Domain Model

| Objects        | Properties                       | Messages                             | Output   |
|----------------|----------------------------------|--------------------------------------|----------|
| BankAccount    | currentBalance @Integer          | get CurrentBalance()                 | @Integer |
|                |                                  | set CurrentBalance(Integer)          | @Void    |
|                |                                  | creditAccount(Integer)               | @Void    |
|                |                                  | debitAccount(Integer)                | @Void    |
|                | transactions @Array[Transaction] | get ListOfTransactions()             | @Array   |
|                |                                  | balanceAfterTransaction(Transaction) | @Void    |
|----------------|----------------------------------|--------------------------------------|----------|
| Transaction    | currentBalance @Integer          | get CurrentBalance()                 | @Integer |
|                |                                  | set CurrentBalance()                 |          |
|                | credit @Integer                  | get creditAccount()                  | @Integer |
|                | debit @Integer                   | get debitAccount()                   | @Integer |
|                | date @Date                       | get Date()                           | @Void    |
|----------------|----------------------------------|--------------------------------------|----------|
| PrintStatement | statement @Array[Transaction]    | printStatement(ListOfTransactions)   | @Void    |
|                | header @String                   | printHeader()                        | @Void    |
|                | transaction @String              | printTransaction(transaction)        | @Void    |
|                |                                  | addColumn()                          | @String  |
|                |                                  | formatCash(Integer)                  | @Integer |
|                |                                  | findPadding(ListOfTransactions)      | @Integer |

### Tests

1. Sets the date provided
2. Sets the amount provided to the `creditAccount` variable
3. Sets `debitAccount` equal `0`
4. Sets the amount provided to the `debitAccount` variable
5. Sets `creditAccount` equal `0`
6. Creates a new `backAccount` with balance = `0`
7. Creates a new Array with length = `0`
8. Increases the length of listOfTransactions to `1`
9. Checks that the `transaction` added is the `mockTransaction`
10. Adds cash to `currentBalance` in `BankAccount`
11. Remove cash from `currentBalance` in `BankAccount`
12. Print unformatted header
13. Print unformatted transaction
14. Print unformatted `listOfTransactions`
15. Print unformatted `listOfTransactions` in reverse order
16. Print unformatted header from `printStatement` method
17. Add columns between values of the statements
18. Format numbers to display two decimals
19. Check that `formatCash` is called from `printTransaction`
20. Add `if` statement in `formatCash` to avoid displaying amounts equal to 0, returning empty space
21. Check is `findPadding` is called from `printStatement`

#### Standard

* [ ] Meets the spec
* [ ] Developed test-first
* [ ] Passes tests and code is clean and well formatted
* [ ] Encapsulates adding and storing Transactions in a class
* [ ] Encapsulates Statement formatting in a class
* [ ] Encapsulates Transaction data in a class

#### Extended

* [ ] Can you format the console output?  Credited values should be GREEN and debited values should be RED.  The balance should be GREEN if positive and RED if negative

You may find this link useful [Output to the command line using NodeJS](https://nodejs.dev/en/learn/output-to-the-command-line-using-nodejs/) - check the formatting section (and this links out to a GitHub doc on the [ANSI color codes](https://gist.github.com/iamnewton/8754917))
