# Project: Mini Feed Simulator

## Description

Ever wonder how Instagram or X decides what you see?

In this project, you’ll build the **engine behind a social feed** using only core JavaScript. There is no browser UI and no frameworks. Your job is to design the logic that powers how posts are created, stored, liked, sorted, and filtered.

You will build the **data layer of a social platform**, the same kind of backend-style logic that real applications rely on before anything ever appears on a screen.

By the end of this project, you will have created a working feed simulator that can manage posts entirely through JavaScript.

---

## Learning Objectives

- Practice working with **arrays and objects**
- Implement **functions that manipulate data**
- Use **array methods** such as `map`, `filter`, and `sort`
- Understand how social feeds store and organize posts
- Build logic similar to what real applications use behind the scenes

---

## Project Requirements

Your program should simulate a simple social media feed.

### Post Structure

Each post should be represented as an object with the following properties:

```
id
username
content
likes
timestamp
```

Example:

```js
{
  id: 1,
  username: "paul",
  content: "Just finished building my feed simulator!",
  likes: 12,
  timestamp: 1710000000
}
```

---

## Core Features

### 1. Create Posts

Create a function called:

```
createPost(username, content)
```

This function should:

- Generate a new post object
- Assign a unique id
- Set likes to `0`
- Assign a timestamp
- Add the post to the feed array

---

### 2. Like a Post

Create a function called:

```
likePost(postId)
```

This function should:

- Find the correct post
- Increase its `likes` value by 1

---

### 3. Display the Feed

Create a function called:

```
getFeed()
```

This should return all posts.

---

### 4. Sort the Feed

Create two functions:

```
sortByNewest()
sortByLikes()
```

- `sortByNewest` should return posts sorted by timestamp
- `sortByLikes` should return posts sorted by likes

---

### 5. Filter Posts by User

Create a function:

```
getPostsByUser(username)
```

This should return only the posts created by that user.

---

## Example Usage

Your code should allow logic like this:

```js
createPost("alex", "Hello world")
createPost("paul", "Learning JavaScript is fun")

likePost(1)
likePost(1)

console.log(sortByLikes())
console.log(getPostsByUser("alex"))
```

---

## Project Rules

- Use **arrays and objects**
- Use **functions for each feature**
- Use **array methods where appropriate**
- No DOM manipulation
- No frameworks

---

## Suggested File Structure

```
mini-feed-simulator/
│
├── index.js
└── README.md
```

---

## Submission Checklist

Your project should:

- Store posts in an array
- Allow creating posts
- Allow liking posts
- Support sorting posts
- Support filtering posts by user
- Run successfully using Node