import { connect } from 'react-redux';

import MyPosts from './MyPosts';

import { createPostAC, updatePostTextAC } from '../../store/actions/profilePage';

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    postText: state.profilePage.postText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: () => dispatch(createPostAC()),
    updatePostText: (text) => dispatch(updatePostTextAC(text)),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
