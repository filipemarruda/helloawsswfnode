var AWS = require('aws-sdk');

/**
 * Don't hard-code your credentials!
 * Export the following environment variables instead:
 *
 * export AWS_ACCESS_KEY_ID='AKID'
 * export AWS_SECRET_ACCESS_KEY='SECRET'
 */
 
AWS.config.region = 'sa-east-1';

var swf = new AWS.SWF();


var params = {
  domain: 'helloWorldWalkthrough', /* required */
  taskList: { /* required */
    name: 'HelloWorldList' /* required */
  },
  identity: 'someID'
};
swf.pollForActivityTask(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

/*
var params = {
  domain: 'helloWorldWalkthrough',
  closeStatusFilter: {
    status: 'COMPLETED'
  },
  startTimeFilter: {
    oldestDate: 1410386335,
    latestDate: 1410472736
  }
  
};
swf.countClosedWorkflowExecutions(params, function(err, data) {
  if (err) console.log(err, err.stack); 
  else     console.log(data);
});
*/