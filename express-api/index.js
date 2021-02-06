const express = require("express")
const app = express()
const port = process.env.PORT

app.get("/avatar.(svg|png)", (req, res) => {
    
    // validate queries

    const properties = {
        background: req.query.background ? "#" + req.query.background : undefined,
        color: req.query.color ? "#" + req.query.color : "#fff",
        fontSize: req.query.fontSize ? Number(req.query.fontSize) : 90,
        length: req.query.length ? Math.round(Math.abs(Number(req.query.length))) : 3,
        name: req.query.name ? req.query.name : "Avatar",
        bold: req.query.bold ? Boolean(req.query.bold) : false,
        uppercase: req.query.uppercase ? Boolean(req.query.uppercase) : false,
        height: req.query.height ? Number(req.query.height) : 260,
        width: req.query.width ? Number(req.query.width) : 260
    }

    // query adjustment

    if (properties.fontSize < 16) properties.length = 16
    if (properties.length > 3) properties.length = 3

    if (!properties.background) {
        const colors = ["#6200B3", "#FE5D26", "#37505C", "#FF6666", "#CCFF66", "#679436", "#011627", "#585481", "#6290C3", "#B497D6", "#846C5B", "#94C9A9", "#F7FF58", "#A5E6BA", "#7D7C84"]

        // generates a random background color from the array above

        properties.background = colors[Math.floor(Math.random() * colors.length)]
    }

    // takes first 3 letters from word, or desired length if passed

    properties.name = properties.name.substring(0, properties.length)

    // bolds the name or leaves as normal

    properties.bold ? properties.bold = "font-weight: 900" : properties.bold = "font-weight: normal"

    // capitalize the whole word or first letter of the word

    properties.uppercase ? properties.name = properties.name.toUpperCase() : properties.name = properties.name.replace(/^\w/, a => a.toUpperCase())

    // set header for image/svg and send avatar
    res.set("Content-Type", "image/svg+xml");
    res.send(`<svg style="${properties.bold}" width="${properties.width}px" height="${properties.height}px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">@import url('https://fonts.googleapis.com/css2?family=Open+Sans');</style></defs><rect x="0" y="0" width="${properties.width}px" height="${properties.height}px" style="fill: ${properties.background}"></rect><text x="50%" y="50%" dy=".1em" fill="${properties.color}" text-anchor="middle" dominant-baseline="middle" style="font-family: 'Open Sans', sans-serif;font-size:${properties.fontSize}px;line-height:1">${properties.name}</text></svg>`)
})

app.listen(port, () => {
    console.log("Running on port " + port)
})
