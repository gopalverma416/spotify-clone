import React, { useContext } from 'react';
import  AppContext  from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          posts.length === 0 ? (
            <div>
              <p>No posts found</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id}>
                <p>{post.title}</p>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
};

export default Blogs;