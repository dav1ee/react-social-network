import React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';

import Status from './Status';
import Contacts from './Contacts';

import { createField } from '../../utils/formControls';
import { required } from '../../utils/formValidators';
import { withFormControls } from '../../hoc/withFormControls';

import { ProfileType, ContactsType } from '../../types/types';

const Input = withFormControls('input');

type PropsType = {
  profile: ProfileType;
  isOwner: boolean;
  status: string;
  updateStatus: (status: string) => void;
};

type EditInfoValuesType = {
  fullName: string;
  aboutMe: string;
  lookingForAJobDescription: string;
};

type EditInfoValuesTypeKeys = Extract<keyof EditInfoValuesType, string>;

const EditInfo: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({
  profile,
  isOwner,
  status,
  updateStatus,
  handleSubmit,
  error,
}) => {
  return (
    <form onSubmit={handleSubmit} className="profile-main__info inner-block">
      <div className="profile-main__info-row">
        <div className="label">Name:</div>
        {createField<EditInfoValuesTypeKeys>(
          Input,
          [],
          'fullName',
          'text',
          '',
          'labeled',
          'labeled-edit',
        )}
      </div>
      {status && <Status status={status} updateStatus={updateStatus} isOwner={isOwner} />}
      <div className="profile-main__info-row">
        <div className="label">About me:</div>
        {createField<EditInfoValuesTypeKeys>(
          Input,
          [required],
          'aboutMe',
          'text',
          '',
          'labeled',
          'labeled-edit',
        )}
      </div>
      <div className="profile-main__info-row">
        <div className="label">Job description:</div>
        {createField<EditInfoValuesTypeKeys>(
          Input,
          [required],
          'lookingForAJobDescription',
          'text',
          '',
          'labeled',
          'labeled-edit',
        )}
      </div>
      {Object.keys(profile.contacts).map((key) => (
        <Contacts key={key} title={key} link={profile.contacts[key as keyof ContactsType]} onEdit />
      ))}
      <button className="profile-main__save-btn">
        <i className="fas fa-check" />
      </button>
      {error && (
        <div style={{ color: '#e74c3c', marginTop: '15px', textAlign: 'center' }}>{error}</div>
      )}
    </form>
  );
};

export default reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(EditInfo);
