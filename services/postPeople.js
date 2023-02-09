const postUser = async (url, newUser) => {
  try {
    const { data } = await axios.post(url, newUser);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default postUser;
