const users = [
    { id: 1, name: 'Ahad', age: 25 },
    { id: 2, name: 'Akbar', age: 30 },
    { id: 3, name: 'Aslam', age: 35 }
  ];
  
  // Using forEach with a regular function
  users.forEach(function(user) {
    console.log(user.name, user.age);
  });