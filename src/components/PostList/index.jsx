import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    postList: PropTypes.array,
};
PostList.defaultProps = {
    postList: [],
}
function PostList(props) {
    const { postList } = props;

    return (
        <div>
            <h1>React Hooks useEffect</h1>
            <ul>
                {postList.map((post, i) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;