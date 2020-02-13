import React from 'react';
import Sidebar from './Sidebar';
import Tasks from '../Tasks';

const Content = () => (
    <section className="content">
        <Sidebar></Sidebar>
        <Tasks></Tasks>
    </section>
);

export default Content;
