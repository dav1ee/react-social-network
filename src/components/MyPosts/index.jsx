import { connect } from 'react-redux';

import MyPosts from './MyPosts';

import { createPost, updatePostText } from '../../store/actions/profilePage';

const mapStateToProps = (state) => {
  return {
    fullName: state.profilePage.profile.fullName,
    photo: state.profilePage.profile.photos.small,
    postsData: state.profilePage.postsData,
    postText: state.profilePage.postText,
  };
};

const MyPostsContainer = connect(mapStateToProps, { createPost, updatePostText })(MyPosts);

export default MyPostsContainer;
