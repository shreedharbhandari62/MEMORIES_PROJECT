import express from 'express';
import { getPosts,  createPosts, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();


//logic that now is used in routes is set in the controller
router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost);
router.patch('/:id/likePost', likePost);
router.delete('/:id', deletePost);




export default router;