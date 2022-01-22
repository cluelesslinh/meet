# Meet App

A serverless, progressive web application (PWA) with Reach using a test-driven development (TDD) technique. The app uses the Google Calendar API to fetch upcoming events.

## FEATURE 1: FILTER EVENTS BY CITY

As a user, I should be able to “filter events by city”, so that I can see the list of events that take place in that city.

### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

Given: user has not searched for a city

When: the user opens app  

Then: the user should see a list of upcoming events

### Scenario 2: User should see a list of suggestions when they search for a city.

Given: the main page is open

When: user starts typing to search for a city in the city text box

Then: the user should see a list of cities (suggestions) that matches what they type  

### Scenario 3: User can select a city from the suggested list.

Given: the user selected the city “Berlin” in the city text box and the list of suggested cities is showing

When: the user selects a city (e.g. Berlin) from the suggested cities showing

Then: their city should change to the one they selected (i.e. Berlin) and the user should see a list of upcoming events for that city

## FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

As a user, I should be able to “show/hide an event’s details”, so that I can click more/less to show more or less details about an event.  

### Scenario 1: An event element is collapsed by default.

Given: the user is on the main page

When: the elements are collapsed  

Then: the user should see the event elements

### Scenario 2: User can expand an event to see its details.

Given: the user is on the page of lists of events

When: the user clicks on one of the events

Then: the element expands showing details about the event  


### Scenario 3: User can collapse an event to hide its details.

Given: the user selected an event to show its details

When: the user clicks on hide/less

Then: the element collapses hiding the details about the event

## FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user, I should be able to “specify the number of events”, so that I can choose the amount of elements I want to see listed.

### Scenario 1: When user hasn’t specified a number, 32 is the default number.

Given: the user opens the app

When: the user is on the main page

Then: the number of elements showing is 32

### Scenario 2: User can change the number of events they want to see.

Given: the user opens the app

When: the user specifies the number of events (e.g. 10)

Then: that number of events will show (i.e. 10)

## FEATURE 4: USE THE APP WHEN OFFLINE

As a user, I should be able to “use the app when offline”, so that I can see the events without internet connection.

### Scenario 1: Show cached data when there’s no internet connection.

Given: the user opens the app without internet connection

When: the user wants to see the events

Then: the user should still be able to look at the event’s details without internet connection

### Scenario 2: Show error when user changes the settings (city, time range).

Given: the user has no internet connection

When: the user tries to change settings (city, time range)

Then: the user will not see any events and will see an error message

## FEATURE 5: DATA VISUALIZATION

As a user, I should be able to see a chart of upcoming events, so that I can every event in the selected city.

### Scenario 1: Show a chart with the number of upcoming events in each city.

Given: the user looks at an event

When: the user clicks on the chart

Then: the user should see a chart of upcoming events for each city

 
