// ==UserScript==
// @name        Geeksforgeeks auto dark_night mode - geeksforgeeks.org
// @namespace   https://marcusmors.com
// @match       https://www.geeksforgeeks.org
// @grant       none
// @version     0.1
// @author      jose vilca <marcusmors>
// @description Clicks Geekforgeeks dark theme button.
// @icon        https://www.google.com/s2/favicons?domain=geeksforgeeks.org
// @license     MIT
// ==/UserScript==

function button_click() {
	// let page_button = document.querySelectorAll('[data-gfg-action="toggleGFGTheme"]')
	let page_button = document.querySelector('[data-gfg-action="toggleGFGTheme"]')
	// document.querySelectorAll('[data-gfg-action="toggleGFGTheme"]').forEach((el) => el.click())
	page_button.click()
}

// data-gfg-action="toggleGFGTheme"
// fav violent monkey theme settings
// yonce
// seti
// ruby blue
// monokai
// material
