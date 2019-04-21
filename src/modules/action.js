//define action types

const Types = {
    CREATE_ITEM: 'CREATE_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
    COPY_ITEM: 'COPY_ITEM'
};


//define actions
const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
});

const deletItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
});

const copyItem = id => ({
    type: Types.COPY_ITEM,
    payload: id
});


export default { createItem, deletItem, copyItem, Types };