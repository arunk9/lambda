exports.handler = async (event) => {
    return {
        statusCode: 200,
        statusDescription: "200 OK",
        body: JSON.stringify('Hello from Lambda!!!!!!!!'),
        headers: {
            "Content-Type" : "text/html"
        }
    };
};
