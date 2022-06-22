import React from 'react';

const useUpdateEffect = (callback, dependencies) => {
    const initRef = React.useRef(true);
    React.useEffect(() => {
        if (initRef.current) {
            initRef.current = false;
            return;
        }
        callback();
    }, dependencies);
};

export default useUpdateEffect;
