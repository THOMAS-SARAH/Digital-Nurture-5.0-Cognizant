# React Conditional Rendering – Theory

## Objectives

* Explain conditional rendering in React.
* Define element variables.
* Explain how to prevent components from rendering.

---

# What is Conditional Rendering?

Conditional rendering is a technique in React that allows components or UI elements to be displayed based on specific conditions.

Instead of always displaying the same content, React can render different components depending on:

* User login status
* Data availability
* User permissions
* API responses
* Application state

React uses normal JavaScript conditions such as:

* `if...else`
* Ternary (`? :`) operator
* Logical AND (`&&`)
* Element variables

This makes React applications dynamic and interactive.

---

# Why is Conditional Rendering Needed?

Without conditional rendering, every component would always be visible.

Conditional rendering helps to:

* Show different pages for different users.
* Hide unnecessary information.
* Improve user experience.
* Display loading messages.
* Show error messages only when needed.
* Control access to protected content.

### Example

A flight booking application may display:

* **Guest User**

  * Can view available flights.
  * Cannot book tickets.

* **Logged-in User**

  * Can view flights.
  * Can book tickets.

React decides which page to display based on the login status.

---

# Ways to Implement Conditional Rendering

React supports multiple approaches for conditional rendering.

---

## 1. Using if...else Statement

This is the simplest method.

The component checks a condition and returns different JSX accordingly.

Example concept:

```
if(userLoggedIn)
    return UserPage;
else
    return GuestPage;
```

### Advantages

* Easy to understand.
* Suitable for large conditions.
* Good readability.

---

## 2. Using Ternary Operator

Syntax:

```
condition ? expression1 : expression2
```

If the condition is true, the first expression is rendered.

Otherwise, the second expression is rendered.

Example concept:

```
isLoggedIn
? <UserPage />
: <GuestPage />
```

### Advantages

* Shorter than if-else.
* Ideal for simple conditions.

---

## 3. Using Logical AND (&&)

Sometimes we only want to display something if a condition is true.

Syntax:

```
condition && <Component />
```

If the condition is true,
the component is rendered.

Otherwise,
nothing is displayed.

Example concept:

```
isAdmin && <AdminPanel />
```

---

## 4. Using Switch Statement

Useful when there are multiple conditions.

Example:

```
switch(role)
{
    case "Admin":
    ...
    case "Student":
    ...
}
```

---

# Element Variables

An element variable stores JSX inside a JavaScript variable.

Instead of writing conditions directly inside JSX, the component is first stored in a variable and then rendered.

Example concept:

```
let page;

if(isLoggedIn)
    page = <UserPage />;
else
    page = <GuestPage />;

return page;
```

---

## Advantages of Element Variables

* Improves readability.
* Reduces repeated code.
* Easy to manage large UI conditions.
* Keeps JSX cleaner.

---

# Preventing Components from Rendering

Sometimes a component should not appear at all.

Instead of displaying empty content, React allows the component to return:

```
null
```

Returning `null` means:

* Nothing is displayed.
* The component still exists.
* No HTML is generated.

Example concept:

```
if(!show)
    return null;
```

---

## Why Prevent Rendering?

Prevent rendering when:

* User is not authenticated.
* Required data is unavailable.
* Permission is denied.
* Loading is incomplete.
* Component is temporarily unnecessary.

---

# React State and Conditional Rendering

Conditional rendering usually depends on the component's **state**.

Example:

```
isLoggedIn = true
```

If the state changes,

```
isLoggedIn = false
```

React automatically re-renders the UI.

This automatic updating is one of React's core features.

---

# Login and Logout Example

Consider a flight booking application.

Initially:

```
isLoggedIn = false
```

Displayed page:

* Guest Page
* Flight Details
* Login Button

---

After Login:

```
isLoggedIn = true
```

Displayed page:

* User Page
* Flight Details
* Ticket Booking Option
* Logout Button

---

After Logout:

```
isLoggedIn = false
```

Again React displays:

* Guest Page
* Login Button

---

# Benefits of Conditional Rendering

* Creates dynamic user interfaces.
* Improves user experience.
* Controls access to components.
* Reduces unnecessary rendering.
* Makes applications interactive.
* Works seamlessly with React state.
* Easy to implement using JavaScript conditions.

---

# Real-World Applications

Conditional rendering is widely used in:

* Login and Authentication Systems
* Flight Booking Applications
* Banking Applications
* E-Commerce Websites
* Hospital Management Systems
* Student Portals
* Online Examination Systems
* Social Media Platforms
* Dashboards
* Admin Panels

---

# Key Points to Remember

* Conditional rendering displays UI based on conditions.
* React uses normal JavaScript conditions for rendering.
* Common methods include `if-else`, ternary operator, logical `&&`, and switch statements.
* Element variables store JSX before rendering.
* Returning `null` prevents a component from rendering.
* State changes automatically trigger UI updates.
* Conditional rendering helps build dynamic, secure, and user-friendly React applications.

---

# Conclusion

Conditional rendering is a fundamental concept in React that enables applications to display different content based on conditions such as login status, user roles, or available data. By using JavaScript control statements, element variables, and returning `null` when necessary, developers can build clean, efficient, and interactive user interfaces. It is an essential technique for creating real-world React applications like ticket booking systems, e-commerce websites, dashboards, and authentication-based applications.

