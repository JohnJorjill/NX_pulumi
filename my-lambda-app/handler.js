module.exports.hello = async (event) => {
  const requestBody = JSON.parse(event.body);
  console.log('Message from request body:', requestBody.message);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Function executed successfully!',
      },
      null,
      2
    ),
  };
};
