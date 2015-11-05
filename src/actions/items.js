import * as types from '../constants/ActionTypes'
    // import Items from '../data/items';
const DATA_API = '../data';

// export function fetchItems(options) {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch({
//                 type: types.FETCH_ITEMS,
//                 items: Items
//             });
//         }, 1000);
//     }
// }

export function fetchItems() {
    return dispatch => {
        fetch(`${DATA_API}/items.json`)
            .then(res => res.json())
            .then(res => dispatch({
                type: types.FETCH_ITEMS,
                items: res
            }))
    }
}

export function searchItems(searchTerm) {
    return {
        type: types.SEARCH_ITEMS,
        searchTerm: searchTerm
    }
}

export function getItem(id) {
    return {
        type: types.GET_ITEM,
        item: Items.filter(c => c.id == id)[0]
    }
}
