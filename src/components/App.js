import React from 'react';
import Note from './Note';
import Footer from './Footer';
import Header from './Header';
import notes from '../notes';

function createNote(props) {
    return ( <Note
        key = {props.key}
        title = {props.title}
        content = {props.content}
        />
        )
};


export default function App() {
    return (
    <div>
        <Header />,
        {notes.map(createNote)}
        <Footer />
    </div>
    )
}