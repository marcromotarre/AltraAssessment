import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Profession from '../Profession';

/** this component should:
 *  - render profession:
 *      - profession name
 */

const props = {
  name: 'profession name',
};

describe('Profession Component tests', () => {
  it('Profession Snapshot', () => {
    const tree = renderer.create(<Profession {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Profession renders profession name', () => {
    const wrapper = shallow(<Profession {...props} />);

    expect(wrapper.children().length).toBe(1);
    expect(wrapper.find('label').length).toBe(1);
    const label = wrapper.childAt(0);
    expect(label.text()).toBe(`${props.name}`);
  });
});
