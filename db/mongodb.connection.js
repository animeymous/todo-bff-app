const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/todosApplication", {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("db up and running")
})
.catch((error) => {
    console.log(`got an error ${error.message}`)
})

// To prevent deprictation warning
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', true);
module.exports = mongoose;