const express = require('express');

const app = express();

// app.use( (req, res, next) => {
//     console.log('will run before route')
//     next(new Error('Failed!'));
// })

// app.use((err, req, res, next) => {
// 	console.log('something goes wrong');
// 	res.status(500).send(err.message);
// });

app.get('/', ( req, res, next ) => {
    console.log('Route / called')
    res.send('Hello world');
})


app.listen(3000, () => {
    console.log('Server running!')
});