import React from 'react';

import Post from './Post';

import './MyPosts.scss';

const MyPosts = () => {
  return (
    <>
      <div className="profile-title">Create post:</div>
      <div className="create-post__form inner-block">
        <textarea placeholder="Share with your friends" />
        <button>
          Create
          <i className="fas fa-pencil-alt" />
        </button>
      </div>
      <div className="profile-title">My posts:</div>
      <div className="posts">
        <Post
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatem, sequi sint
        non aliquid harum a amet, ipsam consequuntur obcaecati incidunt quam vitae, explicabo
        numquam iusto cum quae aspernatur? Dolore beatae quasi autem hic doloremque deserunt harum!
        Aliquam adipisci repellendus ipsa rem hic atque."
        />
        <Post text="Lorem ipsum dolor sit amet." />
        <Post text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nostrum dolore soluta numquam explicabo repudiandae ex eligendi nesciunt?" />
      </div>
    </>
  );
};

export default MyPosts;
