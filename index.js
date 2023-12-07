const https = require("https")
const express = require("express")
const { log } = require("console")
const app = express()
const PORT = process.env.PORT || 3000 //
const TOKEN = 'vBn+GGs8md4ZjroVCbZvgRcr81q8qkI/F9a1fBQr0Zp/K8F6ZMvf3VBwzaeW3OCu6NGM4GEl0+jhwBJ8AIBJndeWaELir6ih+FA2xqGH/dayoy7yuC4WpQxIrKhiTVtiYxS+ZI6ixGZmNS2ttEkFSgdB04t89/1O/w1cDnyilFU=' // ============= เพิ่มเข้ามาใหม่

app.use(express.json())
app.get("/", (req, res) => {
    res.send('halooo')
})

app.post("/webhook", (req, res) => {
    console.log(JSON.stringify(req.body))
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })