What is Mockito?

Mockito is a popular Java mocking framework used with JUnit for unit testing. It allows developers to create mock objects that simulate the behavior of real objects, making it possible to test a class without relying on external systems such as databases, web services, or APIs.

Mockito helps isolate the class being tested by replacing its dependencies with mock objects.

What is Mocking?

Mocking is the process of creating a fake object that imitates the behavior of a real object during testing.

For example, instead of calling a real external API, a mock API object can return predefined responses.

Advantages:

Eliminates dependency on external systems.
Makes tests faster and more reliable.
Enables testing of isolated components.
Allows testing of error conditions easily.
What is Stubbing?

Stubbing is the process of defining the behavior of a mock object.

In Mockito, the when(...).thenReturn(...) method is used to specify what value a mocked method should return.

Example:

when(mockApi.getData()).thenReturn("Mock Data");

Whenever getData() is called, it returns "Mock Data" instead of executing the real implementation.

Mockito Methods Used
Method	Description
mock()	Creates a mock object.
when()	Specifies the behavior of a mocked method.
thenReturn()	Returns a predefined value.
verify()	Verifies whether a mocked method was called (optional).
