# Real-People-Travel

## User Story

```
AS A traveler
I WANT help selecting a travel destination
I WANT help finding accomadations
I WANT help finding things to do at said destination
I WANT a map that will plot out the route of my chosen destinations
I WANT a compact, easy to view, itinerary of all my selections
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria
```
GIVEN a splash page that has a GET STARTED button
WHEN I press the GET STARTED BUTTON
THEN a form appears asking for my name
WHEN I input my name
THEN a selection of travel locations appear with a search bar
WHEN I input into the search bar
THEN the page will auto populate locations based on my input
WHEN I select a location
THEN it will add it to my itinerary and populate accomadations around said location
WHEN I select an accomadation
THEN it will add it to my itinerary and populate attractions around said hotel
WHEN I select up to four attractions
THEN it will add them to my itinerary, after one is added a "I'm finished" button will appear
WHEN I press "I'm finished", or have four attractions
THEN it will populate a roadmap of my itinerary based on distance from one another and a "Save my itinerary" button will appear
WHEN I press "Save my itinerary"
THEN I see a simple list of my selected options and my itinerary will be save to local storage, and from then on populate in the collapsible sidebar
```

## Project Requirements
```
01.) MUST use at least two server-side APIs
02.) MUST use a CSS framework *other than* Bootstrap
03.) MUST use client-side storage to store persistent data
04.) MUST have a polished UI
05.) MUST have good quality coding standards (indentation, scoping, naming, etc.)
06.) MUST NOT use alerts, confirms, or prompts (look into *modals*)
07.) MUST be deployed to GitHub Pages
08.) MUST be interactive (i.e: accept and respond to user input)
```

## Coding Criteria
```
HTML:

1.) Anything inside of element tags MUST be on it's own line and indented.
2.) ALL METADATA MUST be stored inside the <head> element
3.) Document MUST have <!DOCTYPE>, <html>, <head>, <body>, <header>, and <main> elements
4.) Any styling other than CSS framework styling classes MUST NOT be done in the HTML file
5.) Any elements with IDs or Classes will follow a naming convention that start with a lowercase letter, 
    have no spaces, and each new work starting with an uppercase letter.
    
    EXAMPLE:
      class="thisIsAClass" id="ThisIsAnID"
6.) The script element MUST be loaded at the bottom of the <body> tag.


CSS:

1.) All styling should be listed in the order of elements, classes, IDs from top to bottom of the file.
2.) All styling should be done in the order of sizing, positioning, coloring, formatting.
3.) There MUST NOT be ANY empty element, class, or ID stylings.


JavaScript:

1.) All functions and variables will follow a naming convention that start with a lowercase letter, 
    have no spaces, and each new work starting with an uppercase letter.
    
    EXAMPLE:
      function myFunction()
      var myNumber
      
2.) All global variables MUST be declared at the top of the file.
3.) All executable code MUST be placed inside a function that does not fire until the page has finished loading.
4.) All reusable code MUST be placed inside a callable function.
5.) Anything inside of a function, or if, for, switch, case, and other operators MUST be on it's own line and indented.
```
