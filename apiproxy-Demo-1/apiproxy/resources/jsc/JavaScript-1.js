 var host = context.getVariable("target.url");
 var suffix = context.getVariable("proxy.pathsuffix");
 var newURL = host.concat(suffix);
 context.setVariable("target.url","http://dummy.restapiexample.com/api/v1/employees");