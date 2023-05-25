export default async function Auth({ jwt }) {
  try {
    const response = await fetch(
      "https://natours-app-xp62.onrender.com/api/v1/users/Auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error;
  }
}
