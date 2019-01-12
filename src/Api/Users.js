import axios from 'axios';

export async function getUsers() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response;
}

export async function deleteUser(id) {
  const response = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id);
  return response;
}

export async function updateUser(id, values) {
  const response = await axios.put('https://jsonplaceholder.typicode.com/users/'+id, values);
  return response;
}
