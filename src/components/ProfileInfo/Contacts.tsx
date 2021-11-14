import React from 'react';

import { createField } from '../../utils/formControls';
import { withFormControls } from '../../hoc/withFormControls';

const Input = withFormControls('input');

type PropsType = {
  title: string;
  link: string;
  onEdit?: boolean;
};

const Contacts: React.FC<PropsType> = ({ title, link, onEdit }) => {
  return (
    <>
      {onEdit ? (
        <div className="profile-main__info-row">
          <div className="label">{title}:</div>
          {createField(
            Input,
            [],
            'contacts.' + title,
            'text',
            '',
            'labeled labeled-link',
            'labeled-edit',
          )}
        </div>
      ) : (
        link && (
          <div className="profile-main__info-row">
            <div className="label">{title}:</div>
            <div className="labeled labeled-link">{link}</div>
          </div>
        )
      )}
    </>
  );
};

export default Contacts;
