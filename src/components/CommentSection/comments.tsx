
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { addComment } from "../../services/userApi"


import { Box, Button, Divider } from '@mui/material';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { toast } from 'react-toastify';
import CommentList from '../commentList';
import { io } from 'socket.io-client';

interface Comment {
  _id: string;
  postedBy: {
    name: string;
    // other properties if any
  };
  text: string;
  // other properties if any
}

const socket = io();


const SinglePost = () => {




  const [createdAt, setCreatedAt] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentsRealTime, setCommentsRealTime] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [postId, setPostId] = useState<any>();




  const { id: urlPostId } = useParams<{ id: string }>();
  console.log('Params:', useParams());
console.log('Current urlPostId:', urlPostId);
console.log(postId,'ggggg')

  useEffect(() => {
    socket.on('new-comment', (newComment) => {
      setCommentsRealTime((prevComments) => [...prevComments, newComment]);
    });

    // Set the postId obtained from the URL parameters
    setPostId(urlPostId);
    console.log('Current urlPostId2:', urlPostId);
  }, [urlPostId]); // Add urlPostId as a dependency
  console.log('Current postId:', postId);
  // add comment

  const addCommentHandler = async (postId: any,e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (postId === undefined) {
        console.error('postId is undefined');
        return;
      }
      // Optimistically update the state
      setComment('');
      toast.success('Comment added');
      setCreatedAt(new Date().toISOString()); // Update createdAt if needed
      const newComment: Comment = { _id: 'temp-id', text: comment, postedBy: { name: 'Your Name' } };
      setComments((prevComments) => [...prevComments, newComment]);
      // Assuming 'Your Name' is the default user name

      // Make the API call
      console.log('Calling addComment with:', { id: postId, comment: comment });
      const response = await addComment({ id: postId, comment: comment });
      const data = response.data;
      console.log('Server response:', data);

      if (data.success === true) {
        // Update the state with the server response
        setCreatedAt(data.post.createdAt);
        setComments(data.post.comments);
        socket.emit('comment', data.post.comments);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  };



  let uiCommentUpdate: Comment[] = commentsRealTime.length > 0 ? commentsRealTime : comments;

  return (
    <>

      <Box sx={{ bgcolor: "#fafafa", display: 'flex', justifyContent: 'center', pt: 4, pb: 4, minHeight: "100vh" }}>
        {

          <>
            <Card sx={{ maxWidth: 1000, height: '100%' }}>

              <CardContent>

                <Divider variant="inset" />
                {/* add coment list */}
                {
                  comments.length === 0 ? '' :
                    <Typography variant='h5' sx={{ pt: 3, mb: 2 }}>
                      Comments:
                    </Typography>
                }

                {
                  uiCommentUpdate.map(comment => (
                    <CommentList key={comment._id} name={comment.postedBy.name} text={comment.text} />

                  ))
                }



                <>
                  <Box sx={{ pt: 1, pl: 3, pb: 3, bgcolor: "#fafafa" }}>
                    <h2>Add your comment here!</h2>
                    <form onSubmit={(e) => addCommentHandler(postId, e)}>
                      <TextareaAutosize
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
                        value={comment}
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Add a comment..."
                        style={{ width: 500, padding: "5px" }}
                      />
                      <Box sx={{ pt: 1 }}>
                        <Button type="submit" variant="contained" disabled={loading}>
                          {loading ? 'Adding Comment...' : 'Comment'}
                        </Button>
                      </Box>
                    </form>
                  </Box>
                </>



              </CardContent>

            </Card>

          </>
        }
      </Box>

    </>
  );
}

export default SinglePost;