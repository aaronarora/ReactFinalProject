// Function for accessing Open Library's "search" API (designed to provide
// an API equivalent to their in-site search feature)
function olSearchApiCall(params) {
  const queryUrl = "https://openlibrary.org/search.json?" +
    new URLSearchParams(params).toString();
  return fetch(queryUrl)
    .then(result => result.json());
}

// Function for looking up books in the the Open Library
// "Works" API. Docs here: https://openlibrary.org/dev/docs/api/works
//
// This gives more details than the Search API, but has less functionality
// for searching, so we look up stuff with the Search API and then
// make an additional call to this API to find more details.
function olWorksApiCall(olid, customParams = {}) {
  const queryParams = new URLSearchParams({
    jscmd: 'details',
    ...customParams
  }).toString();

  const queryUrl = 'https://openlibrary.org/works/' + olid + '.json?' + queryParams;
  return fetch(queryUrl, { redirect: 'follow' })
    .then(result => result.json());
}

// Function for looking up books in the the Open Library
// "Authors" API. Docs here: https://openlibrary.org/dev/docs/api/authors
//
// This gives more details than the Search API, but has less functionality
// for searching, so we look up stuff with the Search API and then
// make an additional call to this API to find more details.
function olAuthorsApiCall(olid, customParams = {}) {
  const queryParams = new URLSearchParams({
    jscmd: 'details',
    ...customParams
  }).toString();

  const queryUrl = 'https://openlibrary.org/authors/' + olid + '.json?' + queryParams;
  return fetch(queryUrl)
    .then(result => result.json());
}

// Converts an Open Library "key" string to a bare OLID.
//
// Several Open Library endpoints return the OLID for entries in the
// format of a "key" which contains the whole path prefix that you
// would need to look up the item by hand, e.g. "/works/OL24690782W/".
//
// However, some API lookups want the actual OLID as a parameter. Also,
// we use the OLID as the reference for the book when storing the list
// of favorites in local storage. This simply chops off
// the path prefix and gets everything after the final slash (e.g., 
// /works/OL24690782W/ becomes OL24690782W).
function keyToOlid(key) {
  const keySplit = key.split('/');
  return keySplit[keySplit.length - 1];
}

// Check if given OLID is present in the array of favorites in local storage.
// If the list of favorites hasn't even been initialized in local storage yet,
// still returns false.
function checkIsFavorite(olid) {
  const rawFavorites = localStorage.getItem('favorites');

  if (rawFavorites === null) {
    return false;
  }

  const favorites = JSON.parse(rawFavorites);
  return favorites.includes(olid);
}

// If "isFavorite" arg is true, adds given OLID to list of
// favorites in storage (if it's not already there).
// If "isFavorite" arg is false, remove item from list
// of favorites in storage (if it's there)
function updateIsFavorite(olid, newIsFavorite) {
  const rawFavorites = localStorage.getItem('favorites');

  if (rawFavorites === null) {
    // The array of favorites hasn't even been initialized yet--
    // initialize with an empty array if we're removing a favorite,
    // or an array containing only this OLID if we're adding a favorite.
    localStorage.setItem('favorites', JSON.stringify(newIsFavorite ? [olid] : []));
    return;
  }

  const favorites = JSON.parse(rawFavorites);

  if (newIsFavorite) {
    // Add favorite to array in local storage, if needed.
    if (!favorites.includes(olid)) {
      localStorage.setItem('favorites', JSON.stringify([...favorites, olid]))
    }
  } else {
    // Remove any instances of OLID from array in local storage
    localStorage.setItem('favorites', JSON.stringify(favorites.filter(
      favOlid => favOlid !== olid
    )));
  }
}

// Get OLIDs for all favorites from local storage
function retrieveFavorites() {
  if (localStorage.getItem('favorites') === null) {
    return [];
  }

  return JSON.parse(localStorage.getItem('favorites'));
}

export { olSearchApiCall, olWorksApiCall, olAuthorsApiCall, keyToOlid, checkIsFavorite, updateIsFavorite, retrieveFavorites };