let posts = [];
let id = 1;

//Get API the whole data 
const getData = (req, res) => {
    res.json(posts);
};

//Get single value id

const getSingledata = (req, res) => {
    // const post = posts.find(p => p.id == req.params.id);

    const post = posts.find((p) => {
        return p.id == req.params.id;
    });


    if (!post) {
        return res.status(404).json("Data not found");
    }
    else {
        res.json(post);
    }

};

//Create API

const createData = (req, res) => {
    const { author, title } = req.body;

    if (!author || !title) {
        return res.status(404).send("Title and author is required ")
    }

    const createPost =
    {
        id: id++,
        title,
        author
    }
    posts.push(createPost);
    res.status(201).json(createPost);

}



//Updata API

const updateData = (req, res) => {
    const post = posts.find(p => p.id == req.params.id);

    if (!post) {
        return res.status(404).send("Data not found corresponding to id");
    }

    const { title, author } = req.body;

    if (title) post.title = title;
    if (author) post.author = author;

    res.json(post);
};

//delete API

const deleteData = (req, res) => {
    const index = posts.findIndex(p => p.id == req.params.id);

    if (index === -1) {
        return res.status(404).send("No data found corresponding to id");
    }

    const del = posts.splice(index, 1);
    res.json(del);
};

module.exports = {
    getData,
    getSingledata,
    createData,
    updateData,
    deleteData
};

