import AWS from 'aws-sdk';
// Set the region 
// AWS.config.update({region: 'REGION'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName : 'LOCATIONS',
  /* Item properties will depend on your application concerns */
  Item: {
     id: '12345',
     price: 100.00
  }
}


console.log("Table Create Ran");

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
export const lambdaHandler = async (event, context) => {
    try {
        const res = await ddb.put(params).promise();
        process.stdout.write(JSON.stringify({message: "Write to locations", response: res}));
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world 2',
            })
        }
    } catch (err) {
        process.stdout.write(JSON.stringify({message: "System Error", error: err}));
        return err;
    }
};
