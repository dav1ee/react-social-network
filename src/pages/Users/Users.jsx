import React from 'react';
import axios from 'axios';

import './Users.scss';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(({ data }) => this.props.setUsers(data.items));
  }

  render() {
    return (
      <div className="users-page">
        <div className="users-list">
          {this.props.users &&
            this.props.users.map((user) => (
              <div key={`${user.id}_${user.name}`} className="users-list__item inner-block">
                <div className="users-list__item-avatar">
                  <img
                    src={
                      user.photos.small
                        ? user.photos.small
                        : 'https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg'
                    }
                    alt="User Avatar"
                  />
                </div>
                <div className="users-list__item-info">
                  <div className="users-list__item-info__name">{user.name}</div>
                  {user.status ? (
                    <div className="users-list__item-info__status">{user.status}</div>
                  ) : (
                    ''
                  )}
                </div>
                {user.followed ? (
                  <button onClick={() => this.props.unfollowUser(user.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => this.props.followUser(user.id)}>Follow</button>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Users;
