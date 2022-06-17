# NodejsApi Todo-list
* Build a Restful CRUD API for a simple Note-Taking application using Node.js, Express and MongoDB to explain how these work for beginners..

Technologies
Node.js Express MongoDB @ 2.2.33 es6 Nodemon middleware

Steps to Setup
** Install dependencies npm install Run start nodemon server.js You can browse the apis at https://nodejstodo1.herokuapp.com/todos

CRUD - Post (POSt)
Whenever we visit a website the browser sends a post request to the server to perform a operation. This is why we are seeing the "cannot post/" error, it's trying to GET but we're not GIVING (not a real term) yet - because have nothing to send back at the moment. To handle GET requests we use the get method:

const addItem = errorHandler( async (req, res) =>{ const newItem = new todoItemModel({ title: req.body.title, description:req.body.description }); // Saving to Database const saveItem = await newItem.save(); res.status(200) res.json('Item added')

});

MongoDB
The first thing we need to do to start using MongoDB is to install it with npm to use it as our database. npm install mongodb@2.2.33 --save It's important to install that version to work with the current setup that we have. After this we can connect to MongoDB with the connect method that comes with Mongo.Client. We need to setup the following code in our server.js file: Note: this code goes before the handlers, we will also have to move our start server code, the listen, into inside the MongoDB connect method. But more on this later.

mongoose.connect(process.env.todoItemDB , {useNewUrlParser: true , useUnifiedTopology:true}) .then(()=> console.log('MongoDB Connected!!!')) .catch(err => console.log(err)); });

CRUD - UPDATE(PUT)
As the word says the Update operation is used when you want to update something, change it. This can be done with a PUT request. Like POST, the PUT request can either be triggered through JavaScript or a

element. Let's see how's triggered with JavaScript.
const updateItem = errorHandler(async (req, res) =>{ const updateItem = await todoItemModel.findByIdAndUpdate(req.params.id, {$set: req.body}); res.status(200); res.json('Item Updated'); });

CRUD DELETE(DELETE)
As with the other ones, this operation can only be triggered through a DELETE request.

It's very similar to the UPDATE request so let's begin digging into it similarly to how we did with that.

const deleteItem = errorHandler(async (req, res) =>{ const deleteItem = await todoItemModel.findByIdAndDelete(req.params.id); res.status(200); res.json("Item Deleted");

});
