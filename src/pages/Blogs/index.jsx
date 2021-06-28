import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../assets/data';

const Blogs = () => (
  <div>
    <h1>Hello there!</h1>
    <p>Here I will post about different blogs which are available to read. I hope these important informations will help everyone.</p>
    <ul>
      {
          Object.keys(data).map((blogPageNumber) => (
            <li>
              <h2><Link to={`./blogs/${blogPageNumber}`}>{data[blogPageNumber].name}</Link></h2>
              <p>
                {data[blogPageNumber].summary}
              </p>
            </li>
          ))
        }
    </ul>
  </div>
);

export default Blogs;
