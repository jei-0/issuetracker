const { M3O_KEY } = process.env;

const m3o = require("@m3o/m3o-node");

exports.handler = async (event, context) => {
  const apiName = "db";
  const endPoint = "Create";
  const table = "projects";
  const record = JSON.parse(event.body);

  if (!M3O_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "no api key" }),
    };
  }

  try {
    let response = await new m3o.Client({ token: M3O_KEY }).call(
      // @todo change this to the actual API and endpoint you want to call
      apiName, // the name of the API
      endPoint, // the name of the endpoint
      {
        table: table,
        record: record,
      }
    );
    return {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
      },
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    if (e && e.response && e.response.data && e.response.data.Detail) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: e.response.data.Detail }),
      };
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "something went wrong" }),
    };
  }
};
