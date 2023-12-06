import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { createlike, userArticle } from "../../services/userApi";
import { string } from "yup";
import { useNavigate } from 'react-router-dom';
import Comments from "../CommentSection/comments";
import { io } from 'socket.io-client';
import { removeLike } from "../../services/userApi";
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface ArticleData {
    id: string;
    title: string;
    content: string;
    likes: number

    // Add other properties if needed
}
const socket = io();
function Article() {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<ArticleData | null>(null);
    const [likes, setLikes] = useState<number>(0);
    const navigate = useNavigate()
    const [commentCount, setCommentCount] = useState<number>(0);
    const [isCommentBoxOpen, setCommentBoxOpen] = useState(false);
    
    const [isLiked, setIsLiked] = useState<boolean>(false);
 

    const toggleCommentBox = () => {
        setCommentBoxOpen(!isCommentBoxOpen);
    };


    console.log('Component rendering with ID:', id);
    useEffect(() => {
        console.log('Component mounted with ID:', id);

        const articleId = id ?? "";
        userArticle(articleId)
            .then(response => {
                const articleData = response.data.articleUser as ArticleData;
                console.log('Fetched article data:', articleData);
                setArticle(articleData);
            })

            .catch(error => {
                console.error('Error fetching article:', error);
            });
    }, [id]);

    const addLike = async () => {
        try {
            if (id) {
                const { data } = await createlike(id);
                console.log('Add Like Response:', data);
                setLikes(data.post.likes);
                setIsLiked(true);
            }
        } catch (error: any) {
            console.log(error.response.data.error);
        }
    }

    const removeLiked = async () => {
        try {
            if (id) {
                const { data } = await removeLike(id);
                console.log('Remove Like Response:', data);
                setLikes(data.post.likes);
                setIsLiked(false);
            }
        } catch (error: any) {
            console.log(error.response.data.error);
        }
    }

    useEffect(() => {
        socket.on('add-like', (newPosts: any) => {
            setLikes(newPosts.likes);
        });

        socket.on('remove-like', (newPosts) => {
            setLikes(newPosts.likes);
        });
    }, []);




    console.log('Component rendering with article:', article);


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="max-w-xl bg-white p-6 shadow-md rounded-lg ">
                    {article !== null ? (
                        <>
                            <div className="flex items-center justify-between mb-4 mt-3">
                            <Box>
                                    <IconButton onClick={isLiked ? removeLiked : addLike} aria-label="toggle-like">
                                        {isLiked ? (
                                            <FavoriteIcon sx={{ color: 'red' }} />
                                        ) : (
                                            <FavoriteBorderIcon sx={{ color: 'red' }} />
                                        )}
                                    </IconButton>
                                    {likes} Like(s)
                                </Box>

                                <div>
                                    <button className="text-green-500" onClick={toggleCommentBox}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>

                                    </button>
                                </div>
                            </div>

                            <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
                            <p className="text-gray-600">{article.content}</p>
                        </>
                    ) : (
                        <p className="text-gray-500">Loading...</p>
                    )}
                </div>
                {isCommentBoxOpen && (
                    <div className="absolute top-20 right-0 w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-200 p-4 sm:p-6 border-l">
                        <Comments />
                    </div>
                )}

            </div>

        </>
    );
}

export default Article;
