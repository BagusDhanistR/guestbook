const express = require('express')
const app = express()
const port = 3000
const adminRouter = require("./routers/adminRouter")
const guestROuter = require("./routers/guestROuter")
const noteGalleryRouter = require("./routers/noteGalleryRouter")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/admin", adminRouter)
app.use("/note", noteGalleryRouter)
app.use("/guest", guestROuter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})