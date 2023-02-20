const { hello } = require("./handler");

test('Test the lambda function', async() => {
    const data = await hello();
    console.log("Hello Data: ",data)
    expect(data.statusCode).toEqual(200);
  });