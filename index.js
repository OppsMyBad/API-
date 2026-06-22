const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.get('/about', (req, res) => {
    res.json({
        nickname: "KIN", 
        fullname: "Thananphon Tuamjaroen",
        status: "Student",
        hobby: "Coding and Gaming"
    });
});
app.listen(3000, () => {
    console.log("About server running on port 3000")
})