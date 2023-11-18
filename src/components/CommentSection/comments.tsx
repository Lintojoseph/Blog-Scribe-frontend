// import { useEffect, useState } from "react"
// import { io } from "socket.io-client"
// import { addComment } from "../../services/userApi"
// import { toast } from 'react-toastify';
// import CommentList from "../commentList";



// interface Comment {
//   _id: string;
//   postedBy: {
//     name: string;
//     // other properties if any
//   };
//   text: string;
//   // other properties if any
// }
// const socket = io('/', {
//   reconnection: true
// })
// function Comments() {
//   const [comment, setcomment] = useState('')
//   const [comments, setcomments] = useState([])
//   const [commentsRealTime, setcommentsRealTime] = useState([])

//   useEffect(() => {
//     // console.log('socket io',socket)
//     socket.on('new-comment', (newComment) => {
//       setcommentsRealTime(newComment)
//     })
//   }, [])

//   const addcomment = (id: any) => async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     try {
//       const { data } = await addComment(id);
//       if (data.sucess === true) {
//         setcomment('');
//         toast.success('comment added')
//         setcomments(data.post.comments);
//         setcommentsRealTime(data.post.comments);
//         socket.emit('comment', data.post.comments)

//       }
//     } catch {

//     }
//   }
//   let uiCommentUpdate: Comment[] = commentsRealTime.length > 0 ? commentsRealTime : comments;

//   return (
//     <>
//       <div className="border-t border-x-2 border-zinc-50 flex flex-col h-full box-border">
//     {/* Comment list header */}
//     {comments.length > 0 && (
//         <h2 className="text-xl font-bold mt-3 mb-2">Comments:</h2>
//     )}

//     {/* Comment list */}
//     {uiCommentUpdate.map((comment) => (
//         <CommentList
//             key={comment._id}
//             name={comment.postedBy.name}
//             text={comment.text}
//         />
//     ))}

//     {/* Add comment form */}
//     <div className="flex-1 pt-1 pl-3 pb-3 bg-gray-100 flex flex-col justify-between">
//         <h2 className="text-xl font-bold">Add your comment here!</h2>
//         <form onSubmit={(e) => addcomment(e)} className="flex-1">
//             <textarea
//                 onChange={(e) => setcomment(e.target.value)}
//                 value={comment}
//                 className="w-full h-24 p-2 border border-gray-300 rounded"
//                 aria-label="minimum height"
//                 rows={3}
//                 placeholder="Add a comment..."
//             />

//             <div className="pt-1">
//                 <button
//                     type="submit"
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                     Comment
//                 </button>
//             </div>
//         </form>
//     </div>
// </div>


//     </>
//   )
// }

// export default Comments
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




  useEffect(() => {
    socket.on('new-comment', (newComment) => {
      setCommentsRealTime((prevComments) => [...prevComments, newComment]);
    });
  }, []);


  // add comment

  const addCommentHandler = async (postId: any,e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
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