-- ==========================================
-- TABLE CREATION
-- ==========================================

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER(10,2),
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- ==========================================
-- SAMPLE DATA
-- ==========================================

INSERT INTO Customers VALUES (101, 'John Smith', 65, 15000, 'FALSE');
INSERT INTO Customers VALUES (102, 'Sarah Johnson', 45, 8000, 'FALSE');
INSERT INTO Customers VALUES (103, 'Michael Brown', 70, 20000, 'FALSE');
INSERT INTO Customers VALUES (104, 'Emma Davis', 30, 12000, 'FALSE');

INSERT INTO Loans VALUES (1001, 101, 8.5, SYSDATE + 15);
INSERT INTO Loans VALUES (1002, 102, 9.0, SYSDATE + 40);
INSERT INTO Loans VALUES (1003, 103, 7.5, SYSDATE + 20);
INSERT INTO Loans VALUES (1004, 104, 8.0, SYSDATE + 10);

COMMIT;

-- ==========================================
-- SCENARIO 1:
-- Apply 1% Discount to Loan Interest Rates
-- for Customers Above 60 Years Old
-- ==========================================

DECLARE
    CURSOR cust_cur IS
        SELECT CustomerID, Age
        FROM Customers;
BEGIN
    FOR cust IN cust_cur LOOP
        IF cust.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- View Updated Loan Rates
SELECT * FROM Loans;

-- ==========================================
-- SCENARIO 2:
-- Set VIP Status for Customers
-- with Balance > 10000
-- ==========================================

DECLARE
    CURSOR cust_cur IS
        SELECT CustomerID, Balance
        FROM Customers;
BEGIN
    FOR cust IN cust_cur LOOP
        IF cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- View Updated Customers
SELECT * FROM Customers;

-- ==========================================
-- SCENARIO 3:
-- Print Reminders for Loans Due
-- Within Next 30 Days
-- ==========================================

SET SERVEROUTPUT ON;

DECLARE
    CURSOR loan_cur IS
        SELECT LoanID, CustomerID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR loan IN loan_cur LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer ' || loan.CustomerID ||
            ' has Loan ' || loan.LoanID ||
            ' due on ' || TO_CHAR(loan.DueDate, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/
