
# Microservices - Account and Loan Services

## Overview

This project demonstrates the implementation of two independent Spring Boot RESTful microservices for a banking application.

The project consists of:

* **Account Microservice**
* **Loan Microservice**

Both services are standalone Maven projects with their own `pom.xml` and run independently on different ports.

---

## Technologies Used

* Java 17
* Spring Boot 3.x
* Spring Web
* Spring Boot DevTools
* Maven
* VS Code

---

## Project Structure

```
microservices/
│
├── account/
│   ├── src/
│   ├── pom.xml
│
└── loan/
    ├── src/
    ├── pom.xml
```

---

# Account Microservice

## Description

The Account Microservice provides account details based on the account number. This is a simple REST API with dummy data and does not connect to any database.

### Endpoint

```
GET /accounts/{number}
```

### Sample URL

```
http://localhost:8080/accounts/00987987973432
```

### Sample Response

```json
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343.0
}
```

### Server Port

```
8080
```

---

# Loan Microservice

## Description

The Loan Microservice provides loan account details based on the loan number. This service also returns dummy data without any backend connectivity.

### Endpoint

```
GET /loans/{number}
```

### Sample URL

```
http://localhost:8081/loans/H00987987972342
```

### Sample Response

```json
{
  "number": "H00987987972342",
  "type": "car",
  "loan": 400000.0,
  "emi": 3258,
  "tenure": 18
}
```

### Server Port

```
8081
```

---

# Running the Projects

## Build the Project

Navigate to the respective project folder and execute:

```
mvn clean package
```

---

## Run the Account Microservice

```
mvn spring-boot:run
```

or run the `AccountApplication` class from Eclipse.

The service starts on:

```
http://localhost:8080
```

---

## Run the Loan Microservice

Before running, update the `application.properties` file:

```
server.port=8081
```

Run using:

```
mvn spring-boot:run
```

or run the `LoanApplication` class from Eclipse.

The service starts on:

```
http://localhost:8081
```

---

# Testing the APIs

### Account Service

```
GET http://localhost:8080/accounts/00987987973432
```

Expected Response

```json
{
  "number":"00987987973432",
  "type":"savings",
  "balance":234343.0
}
```

---

### Loan Service

```
GET http://localhost:8081/loans/H00987987972342
```

Expected Response

```json
{
  "number":"H00987987972342",
  "type":"car",
  "loan":400000.0,
  "emi":3258,
  "tenure":18
}
```

---

# Features

* Independent Spring Boot microservices
* RESTful APIs
* Maven-based projects
* No database connectivity
* Dummy JSON responses
* Easy to test using a browser or Postman
* Configurable server ports
* Simple project structure suitable for learning microservices

---

# Conclusion

This project demonstrates the basic implementation of microservices using Spring Boot. The Account and Loan services are developed as independent REST applications that can run simultaneously on different ports, illustrating the fundamental principles of a microservices architecture.
