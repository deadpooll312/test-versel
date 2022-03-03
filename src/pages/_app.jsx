import React from 'react';

import { wrapper } from 'store/index';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(App);
