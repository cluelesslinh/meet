import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let NumberOfEventsWrapper;

  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    	given('the user opens the app', () => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {} }/>);
    	});
    	when('the user is on the main page', () => {
        AppWrapper = mount(<App />);
    	});
    	then('the number of elements showing is 32', () => {
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    	});
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
    	given('the user opens the app', () => {
        AppWrapper = mount(<App />);
    	});
    	when('the user specifies the number of events', () => {
        AppWrapper.find('.event-number-input').simulate('change', { target: { value: 7 } })
    	});
    	then('that number of events will show', () => {
        NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(7);
    	});
    });

})
