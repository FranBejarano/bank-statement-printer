import PrintStatement from "../src/PrintStatement.js";

describe('PrintStatement tests', () => {

    describe('printHeader test', () => {

        it('should call `console.log` in `printHeader', () => {
            // Arrange
            let headerSpy = spyOn(console, "log");
            // Act
            PrintStatement.printHeader();
            // Assert
            expect(headerSpy).toHaveBeenCalled();
        });

    });

    describe('printTransaction tests', () => {

        let transactionSpy, mockTransaction, columnSpy

        beforeEach(() => {
            transactionSpy = spyOn(console, "log");
            mockTransaction = {
                Date: "30-01-2023",
                CreditAccount: 1000,
                DebitAccount: 500,
                CurrentBalance: 200,
            };
            columnSpy = spyOn(PrintStatement, "addColumn");
        });

        afterEach(() => {
            transactionSpy = null;
            mockTransaction = null;
            columnSpy = null;
        });

        it('should call `console.log` in `printTransaction', () => {
            // Arrange
            // Act
            PrintStatement.printTransaction(mockTransaction);
            // Assert
            expect(transactionSpy).toHaveBeenCalled();
        });

        it('should call `addColumn` every time is needed', () => {
            // Arrange
            // Act
            PrintStatement.printTransaction(mockTransaction);
            // Assert
            expect(columnSpy).toHaveBeenCalled();
        });

    });

    describe('printStatement tests', () => {

        let mockListOfTransactions, statementSpy, transactionSpy, tempArray, headerSpy, paddingSpy, emptyCell;

        beforeEach(() => {
            transactionSpy = spyOn(PrintStatement, "printTransaction");
            mockListOfTransactions = [
                { mockTransaction: `1` },
                { mockTransaction: `2` },
                { mockTransaction: `3` },
            ];
            tempArray = mockListOfTransactions;
            headerSpy = spyOn(PrintStatement, "printHeader");
            paddingSpy = spyOn(PrintStatement, "findPadding");
            emptyCell = undefined;
        });

        afterEach(() => {
            statementSpy = null;
            mockListOfTransactions = null;
            transactionSpy = null;
            headerSpy = null;
            paddingSpy = null;
            emptyCell = null;
        });

        it('should call `console.log` in `printStatement`', () => {
            // Arrange
            // Act
            PrintStatement.printStatement(mockListOfTransactions);
            // Assert
            expect(transactionSpy).toHaveBeenCalled();
        });

        it('should print `mockListOfTransactions` in reverse order', () => {
            // Arrange
            // Act
            PrintStatement.printStatement(mockListOfTransactions);
            tempArray = tempArray.reverse();

            // Assert
            expect(transactionSpy.calls.allArgs(0)[0]).toEqual([mockListOfTransactions[2], emptyCell],);
        });

        it('should call `printHeader` from `printStatement', () => {
            // Arrange
            // Act
            PrintStatement.printStatement(mockListOfTransactions);
            // Assert
            expect(headerSpy).toHaveBeenCalled();
        });

        it('should call `findPadding` from `printStatement', () => {
            // Arrange
            // Act
            PrintStatement.printStatement(mockListOfTransactions);
            // Assert
            expect(paddingSpy).toHaveBeenCalled();
        });


    });

    describe('formatCash tests', () => {

        let amount, spyCash;

        beforeEach(() => {
            amount = 1000;
            //
        });

        afterEach(() => {
            amount = null;
            spyCash = null;
        });

        it('should add two decimal numbers after the value', () => {
            // Arrange
            // Act
            // Assert
            expect(PrintStatement.formatCash(amount)).toBe("1000.00");
        });

        it('should call `formatCash` from `printTransaction`', () => {
            // Arrange
            spyCash = spyOn(PrintStatement, "formatCash");
            // Act
            PrintStatement.printTransaction(amount);
            // Assert
            expect(spyCash).toHaveBeenCalled();
        });

        it('should add two decimal numbers after the value', () => {
            // Arrange
            // Act
            // Assert
            expect(PrintStatement.formatCash(0)).toBe(" ");
        });
    });

});