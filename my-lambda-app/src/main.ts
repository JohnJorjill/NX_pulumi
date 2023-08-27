module.exports.hello = async (event) => {
  console.log('Request body:', event.body);
  return {
    statusCode: 200,
    body: 'Success',
  };
};
