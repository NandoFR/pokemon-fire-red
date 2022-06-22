import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRoutes from './AppRoutes';
import Music from './components/Music/Music';
import Layout from './Layout';
const App = () => {
    return (
        <>
            <Provider store={store}>
                <Music />
                <GlobalStyle />
                <Layout>
                    <AppRoutes />
                </Layout>
            </Provider>
        </>
    );
};

export default App;
