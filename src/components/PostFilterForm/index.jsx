import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";
PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
    onSubmit: null,
}

function PostFilterForm(props) {
    const { onSubmit } = props
    const [value, setValue] = useState("");
    //const typingTimeoutRef = useRef(null);

    const typingTimeoutRef = useRef(_.debounce((val) => onSubmit(val), 1000)).current;


    function hanleChangeInput(e) {
        // const { target: { value } } = e; //     {value} = e.target

        setValue(e.target.value);

        // cach 1 settimeout
        // if (typingTimeoutRef) {
        //     clearTimeout(typingTimeoutRef.current);
        // }
        const val = e.target.value;
        // typingTimeoutRef.current = setTimeout(() => onSubmit(val), 1000);

        // cach 2 debounce lodash

        typingTimeoutRef(val);


    }

    return (
        <form>
            <input type="text" value={value} onChange={hanleChangeInput} ></input>
        </form>
    );
}

export default PostFilterForm;
