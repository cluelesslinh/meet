Feature: Show and hide an event's details.

Scenario: An event element is collapsed by default.
Given the user is on the main page
When the elements are collapsed
Then the user should see the event elements

Scenario: User can expand an event to see its details.
Given the user is on the page of lists of events
When the user clicks on one of the events
Then the element expands showing details about the event

Scenario: User can collapse an event to hide its details.
Given the user selected an event to show its details
When the user clicks on hide/less
Then the element collapses hiding the details about the event
