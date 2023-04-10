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
