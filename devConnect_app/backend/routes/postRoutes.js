const express = require('express');
const multer = require('multer');
const Post = require('../models/postModel')
const bodyParser = require('body-parser');
const path = require('path');

const router = express.Router();


// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to filename
    },
});

const upload = multer({ storage });

router.post('/uploadPost',(req, res) => {
    const { title, mainData,userId } = req.body;
    // const image = req.files['image']? req.files['image'][0] : {} ;
    // const file = req.files['file']? req.files['file'][0] : {};

    // console.log(image);
    // console.log(file);

    const newPost = new Post({
        title,
        mainData,
        userId,
        likeCount : 0,
    });

    newPost.save()
    .then(() => res.send({message: 'success'}))
    .catch(err => res.status(500).send('Error saving data: ' + err));
  
});

router.get('/getAllPosts',(req,res)=>{
  Post.find() // Fetch all documents from the Upload collection
    .then(posts => res.json(posts)) // Send the uploads as a JSON response
    .catch(err => res.status(500).send('Error retrieving data: ' + err)); // Handle errors
})

router.get('/getById',(req,res)=>{
  const {userId} = req.query;
  Post.find({userId}) // Fetch all documents from the Upload collection
    .then(posts => res.json(posts)) // Send the uploads as a JSON response
    .catch(err => res.status(500).send('Error retrieving data: ' + err)); // Handle errors
})

router.post('/addComment',(req,res)=>{
  const { id } = req.query; // Get the ID from the URL parameters
  const { newComment } = req.body; // Get the new comment from the request body
  Post.findById(id) // Fetch all documents from the Upload collection
    .then(post => {
      if (!post) {
        return res.status(404).send('Post not found'); // Handle not found case
      }

      // Perform operations on the document
      if (newComment) {
        post.comments.push(newComment); // Add the new comment
      }
      return post.save();
    }) // Send the uploads as a JSON response
    .then(updatedPost => res.json(updatedPost))
    .catch(err => res.status(500).send('Error updating data: ' + err)); // Handle errors
})

router.post('/updateLike',(req,res)=>{
  const { id } = req.query; // Get the ID from the URL parameters
  const { newLikeNumber } = req.body; // Get the new comment from the request body
  Post.findById(id) // Fetch all documents from the Upload collection
    .then(post => {
      if (!post) {
        return res.status(404).send('Post not found'); // Handle not found case
      }

      // Perform operations on the document
      if (newLikeNumber) {
        post.likeCount = newLikeNumber; // Add the new comment
      }
      return post.save();
    }) // Send the uploads as a JSON response
    .then(updatedPost => res.json(updatedPost))
    .catch(err => res.status(500).send('Error updating data: ' + err)); // Handle errors
})


module.exports = router;