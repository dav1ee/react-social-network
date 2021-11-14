import { connect } from 'react-redux';

import MyPosts from './MyPosts';

import { actionCreators } from '../../store/actions/profilePage';
import { GlobalState } from '../../store';
import { PostType } from '../../types/types';

type OwnPropsType = { isOwner: boolean };

export type MapStatePropsType = {
  fullName: string | undefined;
  photo: string | undefined | null;
  postsData: Array<PostType>;
  isOwner: boolean;
};

export type MapDispatchPropsType = {
  createPost: (postText: string) => void;
  deletePost: (id: number) => void;
};

const mapStateToProps = (state: GlobalState, ownProps: OwnPropsType): MapStatePropsType => {
  return {
    fullName: state.profilePage.profile?.fullName,
    photo: state.profilePage.profile?.photos.small,
    postsData: state.profilePage.postsData,
    isOwner: ownProps.isOwner,
  };
};

const MyPostsContainer = connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  GlobalState
>(mapStateToProps, {
  createPost: actionCreators.createPost,
  deletePost: actionCreators.deletePost,
})(MyPosts);

export default MyPostsContainer;
