import React from 'react';

class ProfileStatus extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  state = {
    editMode: false,
    status: this.props.status,
  };

  editModeOn = () => {
    this.setState({ editMode: true });
  };

  editModeOff = () => {
    this.setState({ editMode: false });

    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  render() {
    return (
      <div className="profile-main__info-row">
        <div className="label">Status:</div>
        {this.state.editMode ? (
          <>
            <div className="labeled">
              <input
                className="labeled-edit"
                value={this.state.status ? this.state.status : ''}
                onChange={this.onStatusChange}
              />
            </div>
            <i onClick={this.editModeOff} className="fas fa-check" />
          </>
        ) : (
          <>
            <div className="labeled">{this.props.status ? this.props.status : '-'}</div>
            <i onClick={this.editModeOn} className="fas fa-pencil-alt" />
          </>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
