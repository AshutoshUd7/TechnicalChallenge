As per the requirement defined in the problem statement, we have created a javascript NestedObject.js and defined a function makeItem() which return an object as Data and Status. 

Inside Data, we have Item and inside Item we have Name and Size as properties. Where the property Size has it's own properties paired as key-value in form of XL,XLL and their corresponding values.

The object data can be represented as below
data:{item:{name: 'Hoodies',size:{XL: 42,XXL: 44}}}

So what I have done here is the object which is being return has been taken and been pput into it's own variable.So this way by destructuring the properties and their value, I've put each property as a variable to the const identifier and fetching values over the console.log.
