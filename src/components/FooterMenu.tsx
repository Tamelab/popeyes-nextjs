'use client';

const FooterMenu = () => (
  <footer style={{ backgroundColor: 'black', color: 'white' }} className="text-center p-3 mt-auto">
    <p>
      ©{' '}
      {new Date().getFullYear()}
      <br />
      Popeyes Louisiana Kitchen. All rights reserved.
    </p>
  </footer>
);

export default FooterMenu;

