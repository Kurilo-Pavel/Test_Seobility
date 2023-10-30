const request = async (value) => {
  const response = await fetch("http://localhost:9090/api/registration", {
    method: "POST",
    body: JSON.stringify(value),
  });
  return  await response.json();
};

export default request;