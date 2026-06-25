-- ==========================================
-- TABLE CREATION
-- ==========================================

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    AccountType VARCHAR2(20),
    Balance NUMBER(12,2)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER(10,2)
);

-- ==========================================
-- SAMPLE DATA
-- ==========================================

INSERT INTO Accounts VALUES (101, 'John Smith', 'Savings', 10000);
INSERT INTO Accounts VALUES (102, 'Sarah Johnson', 'Savings', 15000);
INSERT INTO Accounts VALUES (103, 'Michael Brown', 'Current', 20000);
INSERT INTO Accounts VALUES (104, 'Emma Davis', 'Savings', 25000);

INSERT INTO Employees VALUES (1, 'Alice', 'IT', 50000);
INSERT INTO Employees VALUES (2, 'Bob', 'IT', 60000);
INSERT INTO Employees VALUES (3, 'Charlie', 'HR', 45000);
INSERT INTO Employees VALUES (4, 'David', 'Finance', 55000);

COMMIT;

-- ==========================================
-- SCENARIO 1:
-- Process Monthly Interest (1%)
-- ==========================================

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;
END;
/

-- Execute Procedure
BEGIN
    ProcessMonthlyInterest;
END;
/

SELECT * FROM Accounts;

-- ==========================================
-- SCENARIO 2:
-- Update Employee Bonus
-- ==========================================

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
)
AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_percent / 100)
    WHERE Department = p_department;

    COMMIT;
END;
/

-- Execute Procedure
BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
/

SELECT * FROM Employees;

-- ==========================================
-- SCENARIO 3:
-- Transfer Funds Between Accounts
-- ==========================================

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
)
AS
    v_balance NUMBER;
BEGIN
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_account;

    IF v_balance >= p_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_from_account;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_to_account;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Transfer Successful');

    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');
    END IF;
END;
/

-- Execute Procedure
SET SERVEROUTPUT ON;

BEGIN
    TransferFunds(101, 102, 2000);
END;
/

SELECT * FROM Accounts;
