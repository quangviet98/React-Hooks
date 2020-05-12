import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState("");

    function handleChangeInput(e) {
        setValue(e.target.value);
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;
        let newTodo = {
            title: value
        }
        onSubmit(newTodo);
        setValue("");
    }


    return (
        <form onSubmit={handleOnSubmit} >
            <input type="text" value={value} onChange={handleChangeInput} />
        </form>
    );
}

export default TodoForm;