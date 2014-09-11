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
  domain: 'helloWorldWalkthrough', 
  workflowId: 'nodeID', 
  workflowType: { 
    name: 'GreeterWorkflow.greet', 
    version: '1.0' 
  },
  childPolicy: 'TERMINATE',
  executionStartToCloseTimeout: '3600',
  input: '["[Ljava.lang.Object;",[]]',
  tagList: [],
  taskList: {
    name: 'HelloWorldList' 
  },
  taskStartToCloseTimeout: '30'
};
swf.startWorkflowExecution(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});


/* polling tasks
var params = {
  domain: 'helloWorldWalkthrough', 
  taskList: { 
    name: 'HelloWorldList' 
  },
  identity: 'someID'
};
swf.pollForActivityTask(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
*/

/* --- Filter closed executions
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