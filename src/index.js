import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './index.scss';

const state = {
  profilePage: {
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
  },

  dialoguesPage: {
    dialoguesData: [
      { id: 1, name: 'Ervin Howell' },
      { id: 2, name: 'Clementine Bauch' },
      { id: 3, name: 'Patricia Lebsack' },
      { id: 4, name: 'Glenna Reichert' },
      { id: 5, name: 'Nicholas Runolfsdottir' },
      { id: 6, name: 'Kurtis Weissnat' },
    ],
    messagesData: [
      { id: 1, message: 'Dolor sit amet consectetur?' },
      {
        id: 2,
        message:
          'Amet consectetur adipisicing elit. Incidunt, repellendus. Odit, cupiditate eligendi.',
      },
      { id: 3, message: 'Repellendus.' },
    ],
  },
};

ReactDOM.render(
  <Router>
    <App state={state} />
  </Router>,
  document.getElementById('root'),
);
