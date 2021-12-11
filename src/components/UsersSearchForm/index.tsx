import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useSelector } from 'react-redux';

import { getFilter } from '../../store/selectors/users';
import { FilterType } from '../../store/reducers/usersPage';

import './UsersSearchForm.scss';

type PropsType = { onSetFilter: (filter: FilterType) => void };
type FriendFormType = 'true' | 'false' | 'null';
type FormType = {
  term: string;
  friend: FriendFormType;
};

const UsersSearchForm: React.FC<PropsType> = React.memo(({ onSetFilter }) => {
  const filter = useSelector(getFilter);

  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false,
    };

    onSetFilter(filter);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ term: filter.term, friend: String(filter.friend) as FriendFormType }}
      validate={usersSearchFormValidate}
      onSubmit={submit}
      enableReinitialize>
      {({ isSubmitting }) => (
        <Form className="users-search-form">
          <Field
            type="text"
            name="term"
            className="users-search-form__input"
            placeholder="Enter name..."
          />
          <div>
            <Field name="friend" as="select" className="users-search-form__select">
              <option value="null">All users</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting} className="users-search-form__button">
              Search
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
});

const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

export default UsersSearchForm;
