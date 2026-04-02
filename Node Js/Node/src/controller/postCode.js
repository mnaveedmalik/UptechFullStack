const data = (req, res) => {
    res.send("hello from conttroller")
}

const std = (req, res) => {
    res.send("hello from  std contyroller ")
}



module.exports = { data, std };

