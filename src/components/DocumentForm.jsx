import React, {PropTypes} from 'react';

import * as actions from '../actions/documentView';
import css from './DocumentForm.css';

function updater (original, prop, fn) {
  return (e) => fn(Object.assign({}, original, {[prop]: e.target.value}));
}

function preventDefault (fn) {
  return (e) => {
    e.preventDefault();
    fn && fn(e);
  };
}

const errorMap = (error, i) => <li className={css.error} key={i}>{error}</li>;

const DocumentForm = ({
  data,
  errors,
  onUpdate,
  onSubmit,
  onCancel
}) =>
    <form
      className={css.self}
      onSubmit={preventDefault(onSubmit)}
      noValidate={true}
    >
      <ul className={css.errors}>
        {errors && Object.values(errors).map(errorMap)}
      </ul>
      <input
        type='text'
        className={css.title}
        placeholder='Title'
        onChange={updater(data, 'title', onUpdate)}
        value={data.title || ''}
        autoFocus
      />
      <textarea
        type='text'
        className={css.content}
        onChange={updater(data, 'content', onUpdate)}
        value={data.content || ''}
      />
      <footer className={css.buttons}>
        <button
          type='button'
          className={css.cancel}
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type='submit'
          className={css.submit}
          disabled={!onSubmit}
        >
          Save
        </button>
      </footer>
    </form>;

DocumentForm.propTypes = {
  data: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onUpdate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func.isRequired
};

export default DocumentForm;
