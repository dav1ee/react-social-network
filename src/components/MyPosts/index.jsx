import { connect } from 'react-redux';

import MyPosts from './MyPosts';

import { createPost, deletePost } from '../../store/actions/profilePage';

const mapStateToProps = (state) => {
  return {
    fullName: state.profilePage.profile.fullName,
    photo: state.profilePage.profile.photos.small,
    postsData: state.profilePage.postsData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createPost: (postText) => dispatch(createPost(postText)),
  deletePost: (postId) => dispatch(deletePost(postId)),
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
