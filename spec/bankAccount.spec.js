import BankAccount from "../src/BankAccount.js";

describe('BankAccount tests', () => {
    let mockBankAccount;

    describe('`backAccount` initialization', () => {

        beforeEach(() => {
            mockBankAccount = new BankAccount();
        });

        afterEach(() => {
            mockBankAccount = undefined;
        });

        it('should create a new `backAccount` with balance = `0`', () => {
            // Arrange
            // Act
            // Assert
            expect(mockBankAccount.CurrentBalance).toEqual(0);
        });

        it('should create a new Array with length = `0`', () => {
            // Arrange
            // Act
            // Assert
            expect(mockBankAccount.ListOfTransactions.length).toEqual(0);
        });
    });

    describe('`addTransaction tests`', () => {

        let mockTransaction, amount, date, typeOfTransaction;

        beforeEach(() => {
            mockBankAccount = new BankAccount();
            date = "28/01/2023";
            amount = 1000;
            typeOfTransaction = "creditAccount";
            mockTransaction = {
                getCreditAccount: () => { },
                getDebitAccount: () => { }
            };
        });

        it('should increase the length of listOfTransactions to `1`', () => {
            // Arrange
            // Act
            mockBankAccount.addTransaction(mockTransaction);
            // Assert
            expect(mockBankAccount.ListOfTransactions.length).toEqual(1);
        });

        it('should check that the `transaction` added is the `mockTransaction` created', () => {
            // Arrange
            // Act
            mockBankAccount.addTransaction(mockTransaction);
            // Assert
            expect(mockBankAccount.ListOfTransactions[0]).toEqual(mockTransaction);
        })
    });

    describe('add/remove money from `currentBalance`', () => {

        let mockTransaction, amount, previousBalance;

        beforeEach(() => {
            mockBankAccount = new BankAccount();
            amount = 1000;
            mockTransaction = {
                CreditAccount: 0,
                DebitAccount: 0,
                cashAvailable: undefined
            }
            previousBalance = mockBankAccount.CurrentBalance;
        });

        afterEach(() => {
            mockBankAccount = undefined;
            amount = undefined;
            mockTransaction = undefined;
            previousBalance = undefined
        });

        it('should add cash to `currentBalance` in `BankAccount`', () => {
            // Arrange
            mockTransaction.CreditAccount = amount;
            // Act           
            mockBankAccount.balanceAfterTransaction(mockTransaction);
            // Assert
            expect(mockBankAccount.CurrentBalance).toBe(previousBalance + amount)
        });

        it('should remove cash from `currentBalance` in `BankAccount`', () => {
            // Arrange
            mockTransaction.DebitAccount = amount;
            // Act
            mockBankAccount.balanceAfterTransaction(mockTransaction);
            // Assert
            expect(mockBankAccount.CurrentBalance).toBe(previousBalance - amount)
        });

    });
});
