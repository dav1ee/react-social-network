import { usersPage, InitialStateType } from '../store/reducers/usersPage';
import { actionCreators, follow, unfollow } from '../store/actions/usersPage';
import { followAPI } from '../api/follow-api';
import { ResponseType, ResultCodes } from '../api';

// === Action Creators ===
let state: InitialStateType;

beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: 'User 1',
        status: 'text',
        photos: { small: null, large: null },
        followed: false,
      },
      {
        id: 1,
        name: 'User 2',
        status: 'text',
        photos: { small: null, large: null },
        followed: false,
      },
      {
        id: 2,
        name: 'User 3',
        status: 'text',
        photos: { small: null, large: null },
        followed: true,
      },
    ],
    pageSize: 4,
    usersCount: 0,
    currentPage: 1,
    isLoading: false,
    followButtonDisabled: [],
  };
});

test('follow success', () => {
  const newState = usersPage(state, actionCreators.followUser(1));

  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
});

test('unfollow success', () => {
  const newState = usersPage(state, actionCreators.unfollowUser(2));

  expect(newState.users[1].followed).toBeFalsy();
  expect(newState.users[2].followed).toBeFalsy();
});

// === Thunks ===
jest.mock('../api/follow-api');

const followAPIMock = followAPI as jest.Mocked<typeof followAPI>;
const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
  followAPIMock.followUser.mockClear();
  followAPIMock.unfollowUser.mockClear();
});

const result: ResponseType = {
  data: {},
  messages: [],
  resultCode: ResultCodes.Success,
};

followAPIMock.followUser.mockReturnValue(Promise.resolve(result));
followAPIMock.unfollowUser.mockReturnValue(Promise.resolve(result));

test('follow thunk success', async () => {
  const thunk = follow(1);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenCalledWith(1, actionCreators.setFollowButtonDisabled(true, 1));
  expect(dispatchMock).toHaveBeenCalledWith(2, actionCreators.followUser(1));
  expect(dispatchMock).toHaveBeenCalledWith(3, actionCreators.setFollowButtonDisabled(false, 1));
});

test('unfollow thunk success', async () => {
  const thunk = unfollow(1);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenCalledWith(1, actionCreators.setFollowButtonDisabled(true, 1));
  expect(dispatchMock).toHaveBeenCalledWith(2, actionCreators.unfollowUser(1));
  expect(dispatchMock).toHaveBeenCalledWith(3, actionCreators.setFollowButtonDisabled(false, 1));
});
