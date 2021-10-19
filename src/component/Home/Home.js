import React from 'react';
import Service from '../../component/Service/Service';
import Banner from '../Banner/Banner';
import Introduction from '../Introduction/Introduction';
import OnlineBook from '../OnlineBook/OnlineBook';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Introduction></Introduction>
        <Service></Service>
        <OnlineBook></OnlineBook>
        </div>
    );
};

export default Home;