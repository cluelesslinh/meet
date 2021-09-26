import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import EventList from '../EventList';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let EventListWrapper;
  let EventWrapper;
  let AppWrapper;

  test('An event element is collapsed by default.', ({ given, when, then }) => {
    	given('the user is on the main page', () => {
        EventListWrapper = mount(<EventList events={mockData} />);
        EventWrapper = mount(<Event event={mockData[0]} />);
    	});
    	when('the elements are collapsed', () => {
        AppWrapper = mount(<App />);
    	});
    	then('the user should see the event elements', () => {
        expect(EventWrapper.find('.event-details')).toHaveLength(0);
    	});
    });


    test('User can expand an event to see its details.', ({ given, when, then }) => {
    	given('the user is on the page of lists of events', () => {
        AppWrapper = mount(<App />);
        EventListWrapper = mount(<EventList events={mockData} /> );
        EventWrapper = mount(<Event event={mockData[0]} />);
    	});
    	when('the user clicks on one of the events', () => {
        EventWrapper.find('.details-btn').simulate('click');
    	});
    	then('the element expands showing details about the event', () => {
        expect(EventWrapper.find('.event-details')).toHaveLength(1)
    	});
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    	given('the user selected an event to show its details', () => {
        AppWrapper = mount(<App />);
        EventListWrapper = mount(<Event event={mockData[0]} />);
        EventWrapper = mount(<Event event={mockData[0]} />);
        EventWrapper.find('.details-btn').simulate('click');
        EventWrapper.find('.event-details');
    	});
    	when('the user clicks on hide/less', () => {
        EventWrapper.find('.details-btn').simulate('click');
    	});
    	then('the element collapses hiding the details about the event', () => {
        expect(EventWrapper.find('.event-details')).toHaveLength(0);
    	});
    });

});
