import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    pageOnChange: PropTypes.func,
};
Pagination.defaultProps = {
    pageOnChange: null,
}

function Pagination(props) {
    const { pagination, pageOnChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);
    // console.log({ _page });
    // console.log({ totalPages });

    return (
        <div>
            <button
                disabled={_page === 1}
                onClick={() => pageOnChange(_page - 1)}
            >
                previous
             </button>
            <button
                disabled={_page === totalPages}
                onClick={() => pageOnChange(_page + 1)}
            >
                next
             </button>
        </div>
    );
}

export default Pagination;