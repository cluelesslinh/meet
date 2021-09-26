Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number.
Given the user opens the app
When the user is on the main page
Then the number of elements showing is 32

Scenario: User can change the number of events they want to see.
Given the user opens the app
When the user specifies the number of events
Then that number of events will show
