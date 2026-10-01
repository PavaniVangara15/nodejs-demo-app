const expressServer = require('express');
const appObj = expressServer();

appObj.get('/',(req, res)=>{
    res.send('Hello User. your server is working fine');
})
    appObj.listen(3000,()=>{
         console.log('server is running on port 3000');
})

