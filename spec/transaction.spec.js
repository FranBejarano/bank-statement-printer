import Transaction from '../src/Transaction.js';

describe('Transaction tests', () => {

    describe('Transaction instantiation tests', () => {

        describe('Instantiation when `transactionType` = `creditAccount`', () => {

            let mockTransaction, amount, date, typeOfTransaction;

            beforeEach(() => {
                date = "28/01/2023";
                amount = 1000;
                typeOfTransaction = "creditAccount";
                mockTransaction = new Transaction(date, amount, typeOfTransaction);
            });

            afterEach(() => {
                date = undefined;
                amount = undefined;
                typeOfTransaction = undefined;
                mockTransaction = undefined;
            });

            it('should set the date provided', () => {
                // Arrange
                // Act
                // Assert
                expect(mockTransaction.Date).toBe(date);

            });

            it('`should set the amount provided to the `creditAccount` variable', () => {
                // Arrange
                // Act
                // Assert
                expect(mockTransaction.CreditAccount).toBe(amount);
            });

            it('`should set `debitAccount` to `undefined`', () => {
                // Arrange
                // Act
                // Assert
                expect(mockTransaction.DebitAccount).toBe(0);
            });
        });

        describe('Instantiation when `transactionType` = `debitAccount`', () => {

            let mockTransaction, amount, date, typeOfTransaction;

            beforeEach(() => {
                date = "28/01/2023";
                amount = 1000;
                typeOfTransaction = "debitAccount";
                mockTransaction = new Transaction(date, amount, typeOfTransaction);
            });

            afterEach(() => {
                date = undefined;
                amount = undefined;
                typeOfTransaction = undefined;
                mockTransaction = undefined;
            });

            it('`should set the amount provided to the `debitAccount` variable', () => {
                // Arrange
                // Act
                // Assert
                expect(mockTransaction.DebitAccount).toBe(amount);
            });

            it('`should set `creditAccount` to `undefined`', () => {
                // Arrange
                // Act
                // Assert
                expect(mockTransaction.CreditAccount).toBe(0);
            });
        });
    });
});