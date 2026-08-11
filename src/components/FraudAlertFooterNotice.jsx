import React from 'react';
import { Link } from 'react-router-dom';

const FraudAlertFooterNotice = () => {
    return (
        <div className="border border-red-200 bg-red-50 p-4 sm:p-5 rounded-lg text-sm text-gray-700 my-6 shadow-sm">
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5 hidden sm:block">
                    {/* Warning Triangle Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <div className="leading-relaxed">
                    <p className="mb-2">
                        <strong className="text-gray-900 font-bold uppercase tracking-wide text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2 hidden sm:inline-block">Fraud Alert</strong>
                        <strong className="text-gray-900 sm:hidden">Fraud Alert:</strong>{' '}
                        Aviana Academy is an independent corporate training and learning company. 
                        We have only <strong className="text-red-700">ONE</strong> branch/office — Unit No. 2201A, World Trade Center (WTC), Above Orion Mall, Brigade Gateway Campus, Malleswaram (W), Bengaluru – 560055. 
                        We are <strong className="text-gray-900">not associated</strong> with "Aviana Softskills" or any similarly named company or branch, at any other location.
                    </p>
                    <p>
                        If anyone claims to represent Aviana Academy from any other address, please verify with us directly before making any payment:{' '}
                        <span className="inline-flex items-center gap-2 sm:gap-3 flex-wrap mt-2 sm:mt-0 font-medium text-gray-900">
                            <a href="tel:+919845739709" className="inline-flex items-center gap-1.5 hover:text-red-700 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                +91 98457 39709
                            </a>
                            <span className="hidden sm:inline text-gray-300">|</span>
                            <a href="mailto:info@avianaacademy.in" className="inline-flex items-center gap-1.5 hover:text-red-700 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                info@avianaacademy.in
                            </a>
                        </span>
                        {' '}
                        <Link to="/fraud-alert" className="inline-flex items-center gap-1 font-semibold text-red-700 hover:text-red-900 transition-colors ml-0 sm:ml-2 whitespace-nowrap mt-2 sm:mt-0">
                            Read more &rarr;
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FraudAlertFooterNotice;
