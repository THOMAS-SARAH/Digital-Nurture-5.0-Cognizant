Exercise 1: Setting Up JUnit
Aim

To set up JUnit in a Java project and create a test class for writing unit tests.

Theory
What is JUnit?

JUnit is a popular open-source testing framework for Java that is used to perform unit testing. Unit testing verifies that individual methods or classes of an application work as expected. JUnit allows developers to write test cases, execute them automatically, and verify the results.

JUnit helps improve software quality by identifying bugs early in the development process.

Advantages of JUnit
Automates testing of Java applications.
Detects errors at an early stage.
Simplifies debugging.
Supports Test-Driven Development (TDD).
Integrates with build tools like Maven and Gradle.
Generates test reports.
Maven

Maven is a build automation and dependency management tool used for Java projects. Instead of manually downloading libraries, Maven automatically downloads required dependencies from its central repository.

Dependencies are specified inside the pom.xml file.

JUnit Dependency

For JUnit 4, add the following dependency inside the <dependencies> section of pom.xml:

<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
Explanation
Tag	Description
groupId	Organization providing the library
artifactId	Name of the library
version	Library version
scope	test means available only during testing
Project Structure
JUnitSetupProject
│
├── src
│   ├── main
│   │   └── java
│   │       └── Calculator.java
│   │
│   └── test
│       └── java
│           └── CalculatorTest.java
│
└── pom.xml
