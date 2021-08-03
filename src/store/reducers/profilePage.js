export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const initialState = {
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
  ],
  postText: '',
};

export const profilePage = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST: {
      const newPost = {
        id: Math.floor(Math.random() * 1000),
        text: state.postText,
        likes: 0,
        comments: 0,
      };

      state.postsData.unshift(newPost);
      state.postText = '';

      return state;
    }

    case UPDATE_POST_TEXT: {
      state.postText = action.payload;

      return state;
    }

    default:
      return state;
  }
};
