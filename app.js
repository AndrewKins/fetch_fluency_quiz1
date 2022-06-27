const fetch = require('node-fetch');

async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const userData = await response.json();
    const data = userData.filter(data => data.id === id);
    return data[0];
  }

  async function getUsers(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const userNameData = await response.json();
    const nameData = userNameData.map(nameData => nameData.name)
    return nameData
  }

async function getAddresses() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const userAddressData = await response.json();
  const userAddresses = userAddressData.map(useraddress => `${useraddress.address.street}, ${useraddress.address.suite}, ${useraddress.address.city}`);
  return userAddresses
}

async function shortestPost() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const postsData = await response.json();
  const shortPost = postsData.sort(function(a, b){
     b.body.length - a.body.length})
  return shortPost[0]
}

async function numCompleted() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todosData = await response.json();
  const completedPost = todosData.filter(todo => todo.completed === true)
  return completedPost.length
}

async function searchPosts(searchWord) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${searchWord}`);
  const postsData = await response.json();
  const getPosts = postsData.filter(post => post.body === searchWord)
  return getPosts
}

// Create a form dynamically
const form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "submit.php");

let SearchInput = document.createElement("input");
    SearchInput.setAttribute("type", "text");
    SearchInput.setAttribute("name", "Search");
    SearchInput.setAttribute("placeholder", "Search User Name");

var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");

form.appendChild(SearchInput);






module.exports = {
  getPost,
  getUsers,
  getAddresses,
  shortestPost,
  numCompleted,
  searchPosts,
};