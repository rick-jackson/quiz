import axios from "axios";

export const save = async (email, data) => {
  await axios.post("https://65e0601ad3db23f762491e69.mockapi.io/quiz", {
    email,
    data,
  });
};
