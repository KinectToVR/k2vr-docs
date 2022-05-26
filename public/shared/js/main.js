function AccordionClick (e) {
    const accordionContent = e.srcElement.parentElement.querySelector( '.accordion-content' );

    if (accordionContent.classList.contains( 'collapsed' )) {
        accordionContent.classList.remove( 'collapsed' );
    } else {
        accordionContent.classList.add( 'collapsed' );
    }
}

function ComparisionControlClick (e) {

    // Early quit if we aren't holding any buttons
    if ( e.buttons === 0 && e.type === 'mousemove' ) return false;

    // Fetch comparision card ; up to 5 parents
    let element = e.target;
    for ( let i = 0; i < 5; i++ ) {
        if ( !element.classList.contains( 'comparision-card' )) {
            element = element.parentNode;
        } else break;
    }
    // Calculate new width
    const newWidth = e.layerX;
    element.setAttribute( 'style', `--compare-width: ${newWidth}px` );

    // Fuck dragging
    return false;
}

const waitForGlobal = function( key, callback ) {
    if ( window[key] ) {
        callback ();
    } else {
        setTimeout( function () {
            waitForGlobal( key, callback );
        }, 100 );
    }
};

let fuse = null;
let documentLoaded = false;

let SearchRefs = {};

function createSearchResult( searchItem ) {

	const element = document.createElement( 'li' );
	element.classList.add( 'search-result' );

    const a = document.createElement( 'a' );
    const linkText = document.createTextNode( searchItem.item.title );
    a.appendChild( linkText );
    a.title = searchItem.item.title;
    a.href = `/${searchItem.item.path}`;
    element.appendChild( a );

    element.appendChild( a );

	return element;
}

function openSearch () {
	const canSearch = documentLoaded && fuse != null;
	if ( !canSearch )
		return;

    // Toggle container visiblity
    if (SearchRefs.searchContainer.classList.contains( 'visible' )) {
        SearchRefs.searchContainer.classList.remove( 'visible' );
    } else {
        SearchRefs.searchContainer.classList.add( 'visible' );
        SearchRefs.searchTextbox.focus ();
    }

    doSearch ();
}

function doSearch () {
	const canSearch = documentLoaded && fuse != null;
	if ( !canSearch )
		return;

    const searchString = SearchRefs.searchTextbox.value
        .replace ( /[.,\/#!?@\+$%\^&\*;:{}="\-_`~()\\]/g, " " )    // Filter out punctuation
        .replaceAll ( /\s{2,}/g, ' ' ).replaceAll( '\n', ' ' )     // Filter out whitespace
        .trim ().toLowerCase ();                                   // Clean string

    if ( searchString.length > 0 ) {
        SearchRefs.searchInputContainer.classList.add( 'has-value' );
    } else {
        SearchRefs.searchInputContainer.classList.remove( 'has-value' );
    }

    const result = fuse.search( searchString );

    SearchRefs.searchResultsContainer.innerHTML = '';

    result.sort( function( a, b ) { 
        return b.score - a.score;
    });

    result.forEach( (item) => {
        const itemToAdd = createSearchResult( item );
        SearchRefs.searchResultsContainer.appendChild( itemToAdd );
    });
}

document.addEventListener( "DOMContentLoaded", ( () => {
	// Try yeeting noJS flag
	document.documentElement.classList.remove( 'no-js' );

    // Search
	// Fetch references
	SearchRefs = {
		searchButton:           document.querySelector( 'header button.search' ),
		searchContainer:        document.querySelector( '.search-container-root' ),
		searchResultsContainer: document.querySelector( '.search-container-root .search-results-container' ),
		searchInputContainer:   document.querySelector( '.search-container-root .search-input' ),
		searchTextbox:          document.querySelector( '.search-container-root .search-input .search-input-textbox' ),
		searchClear:            document.querySelector( '.search-container-root .search-input #close' ),
	};

    // Search button on header => open search popup
	SearchRefs.searchButton.onclick = openSearch;
    // Clicking on bg => hide popup
	SearchRefs.searchContainer.onclick = ( () => {
        SearchRefs.searchContainer.classList.remove( 'visible' );
    });
    // Click on search div => focus on textbox
    SearchRefs.searchInputContainer.onclick = ( () => {
        SearchRefs.searchTextbox.focus ();
    });
    // Clear results
    SearchRefs.searchClear.onclick = ( (e) => {
        // Stop propagating
        if ( e.stopPropagation ) {
            e.stopPropagation ();
        } else {
            e.cancelBubble = true;
        }
        SearchRefs.searchTextbox.value = '';
        doSearch ();
    });
    // Textbox input event
    SearchRefs.searchTextbox.oninput = doSearch;
    // Disable clicking on the popup hiding the popout
    document.querySelector( '.search-container-root .search-container' ).onclick = ( (e) => {
        if ( e.stopPropagation ) {
            e.stopPropagation ();
        } else {
            e.cancelBubble = true;
        }
    });

	documentLoaded = true;

    // Accordions
    document.querySelectorAll( '.accordion .accordion-header' ).forEach( (accordion) => {
        accordion.onclick = AccordionClick;
    });

    // Comparision Control
    document.querySelectorAll( '.comparision-card' ).forEach( (comparisionControl) => {
        comparisionControl.onmousemove = ComparisionControlClick;
        comparisionControl.onmouseup = ComparisionControlClick;
    });

    const docsSidebar = document.querySelector( '.docs-sidebar' );
    const sidebarOverlay = document.querySelector( '.sidebar-overlay' );

    // Mobile hamburger
    document.querySelector( '.mobile.sidebar' ).onclick = ( (e) => {
        if (docsSidebar.classList.contains( "expand" )) {
            docsSidebar.classList.remove( "expand" );
            docsSidebar.classList.add( "collapse" );
        } else {
            docsSidebar.classList.add( "expand" );
            docsSidebar.classList.remove( "collapse" );
        }
    });

    sidebarOverlay.onclick = ( (e) => {
        docsSidebar.classList.remove( "expand" );
        docsSidebar.classList.add( "collapse" );
    });

}));

document.onkeyup = ( (e) => {
    if ( e.key === "Escape" ) {
        SearchRefs.searchContainer.classList.remove( 'visible' );
    }
});

async function getJSON( jsonURL ) {
    return fetch( jsonURL )
        .then( (response) => response.json() )
        .then( (responseJson) => { return responseJson } );
}

waitForGlobal( "Fuse", async function () {
    // Fuse loaded!
    let searchEntries = await getJSON( '/shared/search-entries.json' );

    const options = {
        includeScore: true,
        useExtendedSearch: true,
        shouldSort: true,
        ignoreLocation: true,
        keys: [{
            name: 'title',
            weight: 0.3
        }, {
            name: 'plaintext',
            weight: 0.6
        }, {
            name: 'path',
            weight: 0.1
        }]
    };

    const searchIndex = Fuse.createIndex( options.keys, searchEntries.entries );
    fuse = new Fuse( searchEntries.entries, options, searchIndex );
});

waitForGlobal( "MobileSwipeAPI", async function () {    
    let docsSidebar = document.querySelector( '.docs-sidebar' );

    MobileSwipeAPI.Setup( (gesture) => {
        if (docsSidebar === null )
            docsSidebar = document.querySelector( '.docs-sidebar' );

        if ( docsSidebar.classList.contains( "expand" )
        && gesture.swipeDirection ===  MobileSwipeAPI.SwipeDirection.LEFT ) {
            docsSidebar.classList.remove( "expand" );
            docsSidebar.classList.add( "collapse" );
        } else if ( gesture.swipeDirection ===  MobileSwipeAPI.SwipeDirection.RIGHT ) {
            docsSidebar.classList.add( "expand" );
            docsSidebar.classList.remove( "collapse" );
        }
    });
});