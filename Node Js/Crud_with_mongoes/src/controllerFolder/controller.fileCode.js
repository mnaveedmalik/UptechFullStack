const Post = require("../modelFolder/usermodel")
// C: Creating
const createData = async (req, res) => {
    const { author, title } = req.body;

    const newPost = new Post({ author, title });
    const saved = await newPost.save();

    res.status(201).json(saved);
};


//R: read all the data : get method
const getData = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};

//R: Read the single data 
const getSingledata = async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).send("Not found");

    res.json(post);
};



//U: update the data 
const updateData = async (req, res) => {
    const updated = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updated);
};



//D: Delete the data 
const deleteData = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.send("Deleted");
};

module.exports = { createData, getData, getSingledata, updateData, deleteData };