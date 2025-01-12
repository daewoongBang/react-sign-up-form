import { Global } from '@emotion/react';
import Layout from 'components/common/Layout';
import SignUp from 'pages/SignUp';
import React from 'react';

function App() {
  return (
    <>
      <Global
        styles={{
          '*': {
            margin: 0,
            padding: 0,
          },
          'html, body, body > div': {
            width: '100%',
            height: '100%',
          },
        }}
      />
      <Layout>
        <SignUp />
      </Layout>
    </>
  );
}

export default App;
