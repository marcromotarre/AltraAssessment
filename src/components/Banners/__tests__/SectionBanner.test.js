import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SectionBanner from '../SectionBanner';

/** this component should:
 *  - render Main Banner with:
 *      - town name
 *      - filter icon
 *      - svg background
 */

const props = {
  townName: 'town name',
};

describe('Section Banner Component tests', () => {
  it('SectionBanner Snapshot', () => {
    const tree = renderer.create(<SectionBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('SectionBanner renders Link and HomeIcon', () => {
    const wrapper = shallow(<SectionBanner />);
    expect(wrapper.children().length).toBe(1);
    const link = wrapper.childAt(0);
    expect(link.type().displayName).toBe('Link');
    const homeIcon = link.childAt(0);
    expect(homeIcon.type()).toBe('svg');
    expect(homeIcon.prop('width')).toBe(25);
  });
});
