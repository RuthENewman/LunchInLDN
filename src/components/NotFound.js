import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="four-oh-four">
    404 Page Not Found - try the <Link to="/">Home page</Link>
  </div>
);

export default NotFound;
