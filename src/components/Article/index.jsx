import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Article = ({ data }) => (
  <div>
    <h1>
      {
    data.name
  }
    </h1>

    {/* eslint-disable-next-line react/no-danger */}
    <div className="article-content" dangerouslySetInnerHTML={{ __html: data.content }} />
  </div>
);

Article.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Article;
