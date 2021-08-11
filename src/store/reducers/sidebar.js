const initialState = {
  navLinks: [
    {
      id: 1,
      name: 'Profile',
      path: '/profile',
      icon: 'fas fa-user',
    },
    {
      id: 2,
      name: 'Messages',
      path: '/dialogues',
      icon: 'fas fa-envelope',
    },
    {
      id: 3,
      name: 'News feed',
      path: '/feed',
      icon: 'fas fa-newspaper',
    },
    {
      id: 4,
      name: 'Users',
      path: '/users',
      icon: 'fas fa-users',
    },
    {
      id: 5,
      name: 'Music',
      path: '/music',
      icon: 'fas fa-music',
    },
    {
      id: 6,
      name: 'Settings',
      path: '/settings',
      icon: 'fas fa-cog',
    },
  ],
};

export const sidebar = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
