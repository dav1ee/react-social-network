import { profilePage } from '../store/reducers/profilePage';
import { createPost, deletePost } from '../store/actions/profilePage';

const state = {
  postsData: [
    { id: 1, text: 'Hello' },
    { id: 2, text: 'World' },
  ],
};

it('Length of the array should be increased by 1', () => {
  const action = createPost('some text');
  const newState = profilePage(state, action);

  expect(newState.postsData.length).toBe(3);
});

it('Passed post text should be correct', () => {
  const action = createPost('some text');
  const newState = profilePage(state, action);

  expect(newState.postsData[0].text).toBe('some text');
});

it('Check length after post deletion', () => {
  const action = deletePost(1);
  const newState = profilePage(state, action);

  expect(newState.postsData.length).toBe(1);
});

it('Expect no state change if ID do not match when deleting', () => {
  const action = deletePost(87123);
  const newState = profilePage(state, action);

  expect(newState.postsData.length).toBe(2);
});
