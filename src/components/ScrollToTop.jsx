import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const scrollToHash = () => {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                return true;
            }
            return false;
        };

        if (hash) {
            // Immediate attempt
            if (!scrollToHash()) {
                // Retry after short delay to allow for rendering
                setTimeout(() => {
                    if (!scrollToHash()) {
                        // Final retry
                        setTimeout(scrollToHash, 300);
                    }
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
