import axios from "axios";

export const getBooks = async () => {
  const response = await axios.get("https://books-list-api.vercel.app/books", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": "#b0@6hX8YasCq6^unOaPw1tqR",
    },
  });

  return response.data.data;
};
