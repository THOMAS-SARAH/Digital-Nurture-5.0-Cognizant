Theory
Aim

To verify that a specific method is invoked on a mock object using Mockito's verify() method.

What is Interaction Verification?

Interaction verification is the process of checking whether a method of a mock object was called during the execution of a test. Unlike assertions that validate returned values, interaction verification confirms that the expected method calls occurred.

Mockito provides the verify() method for this purpose.

Why Verify Interactions?

In many applications, methods perform actions such as calling an API, saving data to a database, or sending notifications. Sometimes the focus of the test is not the returned value but whether these interactions happened correctly.

For example:

Checking if an API method was called.
Ensuring a database save method was executed.
Confirming that an email or notification was sent.

Mockito Methods Used

Method	Description
mock()	Creates a mock object.
verify()	Verifies that a specific method was called.
times()	Verifies the exact number of method invocations (optional).
never()	Verifies that a method was never called (optional).
