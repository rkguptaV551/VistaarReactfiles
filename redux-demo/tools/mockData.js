const books = [
    {
      id: 1,
      title: "FullStack React",
      author:"Nate Murray",
      price:890,
      slug:"fullStack-react"
    },
    {
      id: 2,
      title: "React: The Fundamentals",
      author: "Nate Murray",
      price:569,
      slug:"react-the-fundamentals"
    },
    {
      id: 3,
      title: "Java Fundamentals",
       author:"Herbert Schildt",
     price:1200,
     slig:"java-fundamentals"
    },
    {
      id: 4,
      title: "Learning React",
      author: "Alex Bank",
      price: 900,
      slug:"react-learning"
  
     
    },
    {
      id: 5,
      title: "Building Applications with React and Redux",
      author: "Eve Porcello",
      price:1500,
      slug:"react-redux-building-application"
    },
    {
      id: 6,
      title: "Learning  React and Redux",
        author: "Eve Porcello",
      price:789,
      slug:"react-redux-learning"
    },
    {
      id: 7,
      title: "C++ CookBook",
      author:"Herbert Schildt",
      price:780,
      slug:"cpp-cookbook"
  
    },
    {
      id: 8,
      title: "Java The Complete Reference",
      author:"Herbert Schildt",
       price:2000,
       slug:"java-the-complete-reference"
      },
    {
      id: 9,
      title: "Thinking in Java",
     author:"Brude Eckel",
     price:1000,
     slug:"java-thinking-in"
    },
    {
      id: 10,
      title: "Java: A Beginner's Guide",
      author:"Herbert Schildt",
      price:450,
      slug:"java-beginner-guide"
    }
  ];
  
  
  const newBook = {
    id: null,
    title: "",
    author: "",
    price:0
    
  };
  
  // Using CommonJS style export so we can consume via Node (without using Babel-node)
  module.exports = {
    newBook,
    books  
  };
  