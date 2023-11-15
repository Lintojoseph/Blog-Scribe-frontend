// import React from 'react';

// interface CommentListProps {
//   name: string;
//   text: string;
// }

// const CommentList: React.FC<CommentListProps> = ({ name, text }) => {
//   return (
//     <div className="flex items-start border-b border-gray-300 p-4">
//       <div className="mr-4">
//         <img
//           className="w-12 h-12 rounded-full"
//           src="/static/images/avatar/1.jpg"
//           alt={`Avatar of ${name}`}
//         />
//       </div>
//       <div className="flex-1">
//         <div className="flex items-center mb-1">
//           <h3 className="text-lg font-bold">{name}</h3>
//         </div>
//         <p className="text-sm text-gray-700">{text}</p>
//       </div>
//     </div>
//   );
// };

// export default CommentList;
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface CommentListProps {
      name: string;
      text: string;
    }

const CommentList: React.FC<CommentListProps> = ({ name, text }) => {
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={
                            <>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {text}
                                </Typography>
                            </>
                        }
                    />
                </ListItem>

            </List>

        </>
    );
}

export default CommentList;