import React from 'react';

export default function Form(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <label className="form__label">
        TITLE
        <input name="title" placeholder="title" type="text" />
      </label>

      <label className="form__label">
        DESCRIPTION
        <input name="description" placeholder="description" type="text" />
      </label>

      <label className="form__label">
        TAGS
        <input name="tags" placeholder="tags" type="text" />
        <p>Use comma to separate values</p>
      </label>
      <button>Add card</button>
    </form>
  );
}
