import { checkError, client } from './client';

export async function getBlogs() {
  const response = await client.from('blogs').select('*, authors:author_id(id, name)');
  return checkError(response);
}
