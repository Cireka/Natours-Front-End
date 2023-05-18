export default async function getAllTours(url) {
  let req = await fetch(url);
  return req.json();
}
