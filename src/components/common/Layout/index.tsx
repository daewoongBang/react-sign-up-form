import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div
      className='container'
      css={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',

        '> .header': {
          padding: '5px',
          backgroundColor: '#ececec',
        },

        '> .main': {
          flex: 1,
        },

        '> .footer': {
          padding: '10px',
          backgroundColor: '#e5e5e5',
          fontSize: '12px',
          textAlign: 'center',
        },
      }}
    >
      <Header />

      <main className='main'>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
