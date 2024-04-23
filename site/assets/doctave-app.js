/**
 * @description retrieves search results from a corpus based on user input and displays
 * them in a web page using HTML elements.
 * 
 * @returns { object } a list of search results, each containing a link and a preview
 * of the corresponding document.
 */
function search() {
    box = document.getElementById('search-box');
    list = document.getElementById('search-results');
    list.innerHTML = '';

    if (box.value == "") {
        return
    }

    config = {
        fields: {
            title: {
                boost: 2,
            },
            body: {
                boost: 1
            }
        },
        bool: "OR",
        expand: true
    }

    INDEX.search(box.value, config).forEach(function(result) {
        listItem = document.createElement("li");
        listItem.className = "search-result-item";
        listItem.innerHTML =
            "<a href='" + result.doc.uri + "'>" + result.doc.title +
            "<p class='search-result-item-preview'>" + searchPreview(result.doc.body) + "</p>" +
            "</a>";

        list.appendChild(listItem);
    });
}

/**
 * @description extracts the first 100 characters of a given string and replaces
 * certain sequences of characters with ellipses, while preserving the original
 * string's formatting.
 * 
 * @param { string } body - 100-character preview of text that is generated from the
 * original text when the function is called.
 * 
 * @returns { string } a shortened version of the given body text with unnecessary
 * characters removed and a trailing ellipsis.
 */
function searchPreview(body) {
    return body.substring(0, 100)
        .replace(/=+/g, "")
        .replace(/#+/g, "")
        .replace(/\*+/g, "")
        .replace(/_+/g, "") +
        "...";
}

/**
 * @description sets the body's overflow property based on a checkbox's state, hiding
 * the scrollbar when the menu is open.
 */
function disableScrollifMenuOpen() {
    var checkbox = document.getElementById('menu-toggle-switch');

    if (checkbox.checked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

/**
 * @description checks if the current scroll position of the page is below a specified
 * navbar element by at least 50 pixels.
 * 
 * @returns { boolean } a boolean value indicating whether the user is at the top of
 * the page.
 */
function atTop() {
    var nav = document.getElementsByClassName("sidebar-right")[0];

    return window.scrollY <= nav.offsetTop + 50;
}

/**
 * @description determines whether a navigation menu is touching the bottom of the
 * page based on various dimensions and returns a boolean value indicating whether
 * it is or not.
 * 
 * @returns { boolean } a boolean value indicating whether the bottom navigation is
 * touching the viewport's bottom edge.
 */
function navTouchingBottom() {
    var nav = document.getElementsByClassName("page-nav")[0];

    var height = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
                                                                         // Magic number determined
                                                                         // by height of bottom wave
    return window.scrollY + nav.offsetTop + nav.offsetHeight >= height - 230;
}

/**
 * @description determines if the user has scrolled beyond a certain point in the
 * document by comparing the current scroll position to the total height of the document.
 * 
 * @returns { boolean } a boolean value indicating whether the user has scrolled down
 * past a certain point in the page.
 */
function scrolledUp() {
    var height = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

                                                         // Magic number determined
                                                         // by height of bottom wave
    return window.scrollY + window.innerHeight < height - 230;
}

/**
 * @description adjusts the position of a sidebar based on scrolling behavior, adding
 * or removing "fixed" and "bottom" classList to the element with the ID 'page-nav'
 * and the element with the className 'sidebar-right'.
 */
function dragRightMenu() {
    if (atTop()) {
        document.getElementById('page-nav').classList.remove('fixed');
        document.getElementsByClassName('sidebar-right')[0].classList.remove('bottom');
    } else if (scrolledUp()) {
        document.getElementById('page-nav').classList.add('fixed');
        document.getElementsByClassName('sidebar-right')[0].classList.remove('bottom');
    } else if (navTouchingBottom()) {
        document.getElementById('page-nav').classList.remove('fixed');
        document.getElementsByClassName('sidebar-right')[0].classList.add('bottom');
    } else {
        document.getElementById('page-nav').classList.add('fixed');
        document.getElementsByClassName('sidebar-right')[0].classList.remove('bottom');
    }
}

/**
 * @description evaluates whether an element is completely visible within its containing
 * viewport, based on its absolute top and bottom positions relative to the viewport
 * height.
 * 
 * @param { `HTMLDivElement`. } element - HTML element whose visibility is to be
 * determined through the function's calculations and return value.
 * 
 * 		- `getBoundingClientRect()` is used to get the position of the element relative
 * to the client area of the window. This method returns a rectangular object containing
 * the top, right, bottom, and left positions of the element in pixels relative to
 * the window.
 * 		- The `top` property represents the vertical position of the element from the
 * top edge of the window.
 * 		- The `bottom` property represents the vertical position of the element from the
 * bottom edge of the window.
 * 
 * 	The function then checks if the top and bottom positions of the element are within
 * the window height, indicating that it is visible in the window.
 * 
 * @returns { boolean } a boolean value indicating whether an element is completely
 * visible within its parent container.
 */
function isVisible(element) {
    var rect = element.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

/**
 * @description accesses the current color storage setting, and changes it according
 * to a stored preference.
 */
function toggleColor() {
    var color = localStorage.getItem('doctave-color')

    if (color === 'dark') {
        localStorage.setItem('doctave-color', 'light');
    } else {
        localStorage.setItem('doctave-color', 'dark');
    }

    setColor();
}

/**
 * @description sets the color scheme of a website based on the value stored in local
 * storage, using Prism theme to apply Dark or Light themes accordingly.
 */
function setColor() {
    var color = localStorage.getItem('doctave-color')

    if (color === 'dark') {
        document.querySelector("link[rel='stylesheet'][href*='prism-']").href = "/assets/prism-atom-dark.css?v=" + DOCTAVE_TIMESTAMP;
        document.getElementsByTagName('html')[0].classList.remove('light');
        document.getElementsByTagName('html')[0].classList.add('dark');
    } else {
        document.querySelector("link[rel='stylesheet'][href*='prism-']").href = "/assets/prism-ghcolors.css?" + DOCTAVE_TIMESTAMP;
        document.getElementsByTagName('html')[0].classList.remove('dark');
        document.getElementsByTagName('html')[0].classList.add('light');
    }
}

document.getElementById("light-dark-mode-switch").addEventListener("click", toggleColor);


// Initialize mermaid.js based on color theme
var color = localStorage.getItem('doctave-color')
if (color === 'dark') {
    console.log("DARK MODE");
    mermaid.initialize({'theme': 'dark'});
} else {
    mermaid.initialize({'theme': 'default'});
}

var INDEX;

// Load search index
fetch('/search_index.json')
    .then(function(response) {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(function(json) {
        INDEX = elasticlunr.Index.load(json)
        document.getElementById('search-box').oninput = search;
        search();
    });

// Setup keyboard shortcuts

document.onkeydown = function(e) {
    var searchResults = document.getElementById('search-results');
    var first = searchResults.firstChild;
    var searchBox = document.getElementById('search-box');

    switch (e.keyCode) {
        case 83: // The S key
            if (document.activeElement == searchBox) {
                break;
            } else {
                searchBox.focus();
                e.preventDefault();
            }
            break;
        case 38: // if the UP key is pressed
            if (document.activeElement == (searchBox || first)) {
                break;
            } else {
                document.activeElement.parentNode.previousSibling.firstChild.focus();
                e.preventDefault();
            }
            break;
        case 40: // if the DOWN key is pressed
            if (document.activeElement == searchBox) {
                first.firstChild.focus();
                e.preventDefault();
            } else {
                document.activeElement.parentNode.nextSibling.firstChild.focus();
                e.preventDefault();
            }
            break;
        case 27: // if the ESC key is pressed
            if (first) {
                searchResults.innerHTML = '';
            }
            break;
    }
}

disableScrollifMenuOpen();
dragRightMenu();
setColor();
