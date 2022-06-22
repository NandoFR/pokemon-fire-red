import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Start from './pages/Start';
import Blackscreen from './components/Loading/Blackscreen';

const Home = React.lazy(() => import('./pages/Home'));
const CreateCharacter = React.lazy(() => import('./pages/CreateCharacter'));

const AppRoutes = () => {
    const started = useSelector((state) => state.start.isAppStarted);
    const name = useSelector((state) => state.user.name);
    return (
        <>
            <Router>
                {!started ? (
                    <Start />
                ) : started && !name ? (
                    <React.Suspense fallback={<Blackscreen />}>
                        <CreateCharacter />
                    </React.Suspense>
                ) : (
                    <React.Suspense fallback={<Blackscreen />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </React.Suspense>
                )}
            </Router>
        </>
    );
};

export default AppRoutes;
