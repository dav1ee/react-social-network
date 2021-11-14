import { profilePage } from '../store/reducers/profilePage';
import { actionCreators } from '../store/actions/profilePage';

const state = {
  profile: null,
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
  ],
};

it('Length of the array should be increased by 1', () => {
  const action = actionCreators.createPost('some text');
  const newState = profilePage(state, action);

  expect(newState.postsData.length).toBe(4);
});

it('Passed post text should be correct', () => {
  const action = actionCreators.createPost('some text');
  const newState = profilePage(state, action);

  expect(newState.postsData[0].text).toBe('some text');
});

it('Check length after post deletion', () => {
  const action = actionCreators.deletePost(1);
  const newState = profilePage(state, action);

  expect(newState.postsData.length).toBe(2);
});

it('Expect no state change if ID do not match when deleting', () => {
  const action = actionCreators.deletePost(87123);
  const newState = profilePage(state, action);

  expect(newState.postsData.length).toBe(3);
});
