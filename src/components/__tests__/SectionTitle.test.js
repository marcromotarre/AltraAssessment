import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SectionTitle from '../SectionTitle';

/** this component should:
 *  - render section title with:
 *      - section name (section)
 *        - svg (icon)
 *        - title (label) by prop.name (required)
 *      - section number (label)  by prop.number (required)
 */

const props = {
  name: 'section name',
  number: 5,
};

describe('Section Title Component tests', () => {
  it('SectionTitle Snapshot', () => {
    const tree = renderer
      .create(
        <SectionTitle {...props}>
          <svg width={32}>text</svg>
        </SectionTitle>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('SectionTitle renders SectionName, SectionNumber and children', () => {
    const wrapper = shallow(
      <SectionTitle {...props}>
        <svg width={32}>text</svg>
      </SectionTitle>
    );

    expect(wrapper.children().length).toBe(2);
    const sectionName = wrapper.childAt(0);
    expect(sectionName.type().displayName).toBe('styled.section');
    expect(sectionName.children().length).toBe(2);
    expect(sectionName.childAt(0).type()).toBe('svg');
    expect(sectionName.childAt(0).prop('width')).toBe(32);
    expect(sectionName.childAt(0).text()).toBe(`text`);
    expect(sectionName.childAt(1).text()).toBe(`${props.name}`);
    const sectionNumber = wrapper.childAt(1);
    expect(sectionNumber.type().displayName).toBe('styled.label');
    expect(sectionNumber.children().length).toBe(1);
    expect(sectionNumber.childAt(0).text()).toBe(`${props.number}`);
  });
});
