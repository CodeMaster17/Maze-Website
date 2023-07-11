import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const TallyForms = () => {
    useEffect(() => {
        Tally.loadEmbeds(); // Call Tally.loadEmbeds() after the component mounts
    }, []);

    return (
        <div className='flex items-start justify-center w-full before:'>
            <div className='w-[80%] border-[1px] p-4 rounded-md bg-FormColor  ' >

                <Helmet>
                    <script src="https://tally.so/widgets/embed.js" />
                </Helmet>
                {/* Other JSX content */}
                <iframe
                    data-tally-src="https://tally.so/embed/mVjKeM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="100"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Maze Early Access"
                ></iframe>
                {/* Other JSX content */}
            </div>
        </div>
    );
};

export default TallyForms;
