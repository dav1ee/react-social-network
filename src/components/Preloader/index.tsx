import React from 'react';

import preloader from '../../assets/images/preloader.svg';

type PropsType = { className: string };

const Preloader: React.FC<PropsType> = ({ className }) => {
  return (
    <object
      type="image/svg+xml"
      data={preloader}
      style={{ width: 100, height: 100 }}
      className={className}>
      svg-animation
    </object>
  );
};

export default Preloader;
