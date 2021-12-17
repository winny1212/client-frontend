import React from 'react';
import Header from '../../components/layout/Header';

function ErrorPage() {
  return (
    <>
      <Header title="Oops... Missing Page" />
      <p>The page you're looking for is not found</p>
    </>
  );
}

export default ErrorPage;
