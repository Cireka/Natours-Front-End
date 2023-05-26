export default async function getTours(url) {
  let req = await fetch(url);
  return req.json();
}
