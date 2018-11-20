import React, { Component } from 'react';
import Link from '../components/Link';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter });

describe('Link Component', () => {
    it('should render a component', () => {
        const wrapper = shallow(<Link />)
    })

    it('should render a hyperlink within the Link component', () => {
        const wrapper = shallow(<Link />);
        expect(wrapper.find('a').text()).toBe('Click');
    })

    it('should accept the address prop in Link component', () => {
        const wrapper = shallow(<Link address='www.google.com'/>);
        expect(wrapper.instance().props.address).toBe('www.google.com')
    })

    it('should render a tag node correctly', () => {
        const wrapper = shallow(<Link address='www.google.com' />);
        console.log(wrapper.debug())

        expect(wrapper.props().href).toBe('www.google.com')
    })
})

