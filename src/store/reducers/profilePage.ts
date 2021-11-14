import { ProfileType, PostType } from '../../types/types';
import { ActionsTypes } from '../actions/profilePage';

const initialState = {
  profile: null as ProfileType | null,
  status: '',
  postsData: [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatem, sequi sint non aliquid harum a amet, ipsam consequuntur obcaecati incidunt quam vitae, explicabo numquam iusto cum quae aspernatur? Dolore beatae quasi autem hic doloremque deserunt harum! Aliquam adipisci repellendus ipsa rem hic atque.',
      likes: 9,
      comments: 1,
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet.',
      likes: 13,
      comments: 4,
    },
    {
      id: 3,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nostrum dolore soluta numquam explicabo repudiandae ex eligendi nesciunt?',
      likes: 45,
      comments: 12,
    },
  ] as Array<PostType>,
};

type InitialStateType = typeof initialState;

export const profilePage = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'CREATE_POST':
      const newPost = {
        id: Math.floor(Math.random() * 1000),
        text: action.payload,
        likes: 0,
        comments: 0,
      };

      return {
        ...state,
        postsData: [newPost, ...state.postsData],
      };

    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: action.payload,
      };

    case 'SET_USER_STATUS':
      return {
        ...state,
        status: action.payload,
      };

    case 'DELETE_POST':
      return {
        ...state,
        postsData: state.postsData.filter((post) => post.id !== action.payload),
      };

    case 'SAVE_PHOTO_SUCCESS':
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload } as ProfileType,
      };

    default:
      return state;
  }
};
