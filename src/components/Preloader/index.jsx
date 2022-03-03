import React from 'react';

import preloader from 'common/images/Preloader_netral.svg';

const Loader = ({ center, widthsmall = '100px' }) => (
  <div
    className={center ? 'd-flex justify-content-center ml-auto mr-auto' : ''}
  >
    <img
      src={preloader}
      alt=""
      style={{ width: widthsmall, marginTop: '25%' }}
    />
  </div>
);

export default Loader;
