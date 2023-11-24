import Post from './components/Post';
import './App.css';
import React, {useState} from 'react';


const DATA = [
  {
      id: 1,
      title: "volutpat",
      body: "justo donec enim"
  },
  {
      id: 2,
      title: "tellus",
      body: "a scelerisque purus"
  },
  {
      id: 3,
      title: "facilisis",
      body: "luctus accumsan tortor"
  },
  {
      id: 4,
      title: "venenatis",
      body: "suspendisse ultrices gravida"
  },
  {
      id: 5,
      title: "suspendisse",
      body: "sed risus pretium"
  },
]

function App() {
  const [posts, setPosts] = useState(DATA);
  const [getTitle, setTitle] = useState('');

  const handleAddPost = () => {
    const newPost = {
      id: Math.random(),
      title: getTitle,
      body: '',
    };

    setPosts((titlePosts) => [...titlePosts, newPost]);
    setTitle('');
  };

  const handleRemovePost = (postId) => {
    setPosts((titlePosts) => titlePosts.filter((post) => post.id !== postId));
  };

  return (
    <div className="container">
      <div className='input_title'>
        <input
          className='enter-title'
          type="text"
          placeholder="Enter title"
          title={getTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddPost}>Add</button>
      </div>
      <div>
      <div className='posts'>
        {posts.map((post) => (
          <Post key={post.id} id={post.id} title={post.title} onRemove={handleRemovePost} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
