import React from 'react';
import cn from 'classnames';

import Loader from 'components/Preloader';

export default function Button({
  onClick,
  loading,
  loadingSettings = { className: '', small: true },
  className,
  type = 'button',
  children,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn('btn', className)}
      {...rest}
    >
      {loading ? (
        <Loader className={loadingSettings.className} small={loadingSettings.small} widthsmall="50px" />
      ) : children}
    </button>
  );
}
