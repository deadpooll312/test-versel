import React from 'react';

import 'common/styles/bootstrap.scss';

import { wrapper } from 'store/index';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(App);
