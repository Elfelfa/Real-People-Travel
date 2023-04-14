# Real People Travel

**Have you ever thought** _"I would love to go on vacation but I have no idea how to start planning it! I cant afford a travel agent and the thought of doing it on my own is too overhwelming."_?

If your answer is yes (and we all know it is), then **Real People Travel** is just the site for you! We based our idea off of the following saying: _"well, real people dont live like that"_ and the many other variations of the saying. All of which essentially state that only fictional or rich people can travel. We want to stop that stigma, real people DO travel and our website helps you do that. Who needs a travel agent when you can come to [Real People Travel](https://elfelfa.github.io/Real-People-Travel/)!

![Real People Travel home page screenshot](/assets/images/Page1.png)

## Contributors
* Kolt Bodzo [elfelfa](https://github.com/Elfelfa)
* Roy Hargrave [rahargrave](https://github.com/rahargrave)
* Brandon Morgan [brandon6457](https://github.com/brandon6457)
* Keely Sherman [keelyybug](https://github.com/keelyybug)

## User Story


* AS a traveler
    * I WANT help Creating a travel itinerary 
    * I WANT help finding accomadations
    * I WANT help finding things to do at said destination
    * I WANT a map that will plot out the route of my chosen destinations
        * SO THAT I can plan a trip accordingly


## Acceptance Criteria

* GIVEN a splash page that has a LET'S PLAN button
    * WHEN I press the LET'S PLAN BUTTON
    * THEN a form appears asking for my name
    * WHEN I input my name
    * THEN a form appears asking for me to select a destination
    * WHEN I input into the search bar my desired location
    * THEN it will add the location to my itinerary and populate accomadations around said location
    * WHEN I select an accomadation
    * THEN it will add it to my itinerary and populate points of interest around said location
    * WHEN I select 4 points of interest
    * THEN it will add each of them to my itinerary as I choose them
    * WHEN I am done selecting all 4 points of interest
    * THEN I will have a roadmap of my itinerary based on distance from one another pop up on my page
    * When I am done looking I can press the "Save Your Itinerary"
    * THEN It will be saved to local storage to be revisted within the collapsible sidebar


## Project Requirements

1. _Must_ use at least two server-side APIs
2. _Must_ a CSS framework *other than* Bootstrap
3. _Must_ use client-side storage to store persistent data
4. _Must_ have a polished UI
5. _Must_ have good quality coding standards (indentation, scoping, naming, etc.)
6. _Must_ **NOT** use alerts, confirms, or prompts (look into *modals*)
7. _Must_ be deployed to GitHub Pages
8. _Must_ be interactive (i.e: accept and respond to user input)


## Coding Criteria

### HTML:

1. Anything inside of element tags MUST be on it's own line and indented.
2. ALL METADATA _MUST_ be stored inside the <head> element.
3. Document _MUST_ have `<!DOCTYPE>, <html>, <head>, <body>, <header>, and <main>` elements.
4. Any styling other than CSS framework styling classes _MUST_ **NOT** be done in the HTML file.
5. Any elements with IDs or Classes will follow a naming convention that start with a lowercase letter, 
    have no spaces, and each new work starting with an uppercase letter.
    ```
    EXAMPLE:
      class="thisIsAClass" id="ThisIsAnID"
    ```
6. The script element MUST be loaded at the bottom of the <body> tag.


### CSS:

1. All styling should be listed in the order of elements, classes, IDs from top to bottom of the file.
2. All styling should be done in the order of sizing, positioning, coloring, formatting.
3. There _MUST_ **NOT** be ANY empty element, class, or ID stylings.


### JavaScript:

1. All functions and variables will follow a naming convention that start with a lowercase letter, 
    have no spaces, and each new work starting with an uppercase letter.
    ```
    EXAMPLE:
      function myFunction()
      var myNumber
    ```  
2. All global variables _MUST_ be declared at the top of the file.
3. All executable code _MUST_ be placed inside a function that does not fire until the page has finished loading.
4. All reusable code _MUST_ be placed inside a callable function.
5. Anything inside of a function, or if, for, switch, case, and other operators MUST be on it's own line and indented.

## Tools Used in This Project
1. Tailwind
2. Google Maps API
3. Google Maps JavaScript API
4. Google Fonts API
5. Google Places API

