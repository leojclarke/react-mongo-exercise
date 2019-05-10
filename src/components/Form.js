import React from 'react';

export default function Form(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <label className="form__label">
        TITLE <input name="title" placeholder="TITLE" type="text" />
      </label>

      <label className="form__label">
        DESCRIPTION
        <input name="description" placeholder="DESCRIPTION" type="text" />
      </label>

      <label className="form__label">
        TAGS
        <input name="tags" placeholder="TAGS" type="text" />
        <small>Use comma to separate values</small>
      </label>
      <button>Add card</button>
    </form>
  );
}
