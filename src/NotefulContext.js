import React from 'react';

const NotefulContext = React.createContext({
    notes: [],
    folders: [],
    deleteItem: () => { },
    addFolder: () => { }
})

export default NotefulContext;