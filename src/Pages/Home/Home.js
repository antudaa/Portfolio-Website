import React from 'react';
import BasicCard from './Card';
import { useTheme } from '@mui/material';


const Home = () => {

    const theme = useTheme();
    console.log(theme);

    return (

        <div>
            <BasicCard></BasicCard>
        </div>
    );
};

export default Home;