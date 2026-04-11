const data = (req, res) => {
    res.send("hello from conttroller")
}

const std = (req, res) => {
    res.send("hello from  std controller ")
}



module.exports = { data, std };

