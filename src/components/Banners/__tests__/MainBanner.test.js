import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MainBanner from '../MainBanner';

/** this component should:
 *  - render Main Banner with:
 *      - svg background (styled.div)
 *          - svg background icon (styled.svg)
 *      - filter icon (styled.svg)
 *      - town name (label) (optional --> only if props)
 */

const props = {
  townName: 'town name',
  showFilterButton: true,
  onClickFilter: jest.fn(),
};

const noTownNameProps = {
  showFilterButton: true,
  onClickFilter: jest.fn(),
};

const noShowFilterButtonProps = {
  townName: 'town name',
  onClickFilter: jest.fn(),
};

describe('Main Banner Component tests', () => {
  it('MainBanner Snapshot', () => {
    const tree = renderer.create(<MainBanner {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('MainBanner renders BackgroundIcon, TownName and Filter Icon', () => {
    const wrapper = shallow(<MainBanner {...props} />);

    expect(wrapper.children().length).toBe(3);
    const bannerBackground = wrapper.childAt(0);
    expect(bannerBackground.type().displayName).toBe('styled.div');
    expect(bannerBackground.children().length).toBe(1);
    const bannerSmallIcon = bannerBackground.childAt(0);
    expect(bannerSmallIcon.type().displayName).toBe('styled.svg');

    const townNameLabel = wrapper.childAt(1);
    expect(townNameLabel.type()).toBe('label');
    expect(townNameLabel.text()).toBe(props.townName);

    const filterButton = wrapper.childAt(2);
    const filterIcon = filterButton.childAt(0);
    expect(filterButton.type().displayName).toBe('styled.button');
    expect(filterIcon.type()).toBe('svg');
    expect(filterIcon.prop('width')).toBe(21.5);
  });

  it('should not render TownName Label if no townName in props', () => {
    const wrapper = shallow(<MainBanner {...noTownNameProps} />);
    expect(wrapper.children().length).toBe(2);
    const bannerBackground = wrapper.childAt(0);
    expect(bannerBackground.type().displayName).toBe('styled.div');
    const filterButton = wrapper.childAt(1);
    expect(filterButton.type().displayName).toBe('styled.button');
  });

  it('should not render FilterIcon Button if props showFilterButton is false', () => {
    const wrapper = shallow(<MainBanner {...noShowFilterButtonProps} />);
    expect(wrapper.children().length).toBe(2);
    const bannerBackground = wrapper.childAt(0);
    expect(bannerBackground.type().displayName).toBe('styled.div');
    const townNameLabel = wrapper.childAt(1);
    expect(townNameLabel.type()).toBe('label');
  });
});
