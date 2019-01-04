import axios from 'axios';

export async function getUsers() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response;
}

export async function deleteUser(id) {
  const response = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id);
  return response;
}
