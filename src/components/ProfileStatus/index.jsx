import React from 'react';

const ProfileStatus = ({ status, updateStatus }) => {
  const [localStatus, setLocalStatus] = React.useState(status);
  const [editMode, setEditMode] = React.useState(false);

  React.useEffect(() => setLocalStatus(status), [status]);

  const editModeOn = () => setEditMode(true);

  const editModeOff = () => {
    setEditMode(false);
    updateStatus(localStatus);
  };

  const onStatusChange = (e) => setLocalStatus(e.target.value);

  return (
    <div className="profile-main__info-row">
      <div className="label">Status:</div>
      {editMode ? (
        <>
          <div className="labeled">
            <input
              className="labeled-edit"
              value={localStatus ? localStatus : ''}
              onChange={onStatusChange}
            />
          </div>
          <i onClick={editModeOff} className="fas fa-check" />
        </>
      ) : (
        <>
          <div className="labeled">{status ? status : '-'}</div>
          <i onClick={editModeOn} className="fas fa-pencil-alt" />
        </>
      )}
    </div>
  );
};

export default ProfileStatus;
