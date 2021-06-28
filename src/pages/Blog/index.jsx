import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Article from '../../components/Article';
import data from '../../assets/data';

const Blog = () => {
  const { id } = useParams();
  const idNumber = Number(id);

  if (idNumber > 6 || idNumber < 1 || Number.isNaN(idNumber) || !Number.isInteger(idNumber)) {
    return <Box my={5}><h1>Article not found</h1></Box>;
  }

  const articleData = data[idNumber];

  return (
    <Article data={articleData} />
  );
};

export default Blog;
