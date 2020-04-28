import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import FiltersApplied from '../FiltersApplied';

/** this component should:
 *  - render FiltersApplied with:
 *      - filter icon button
 *          - onclick calls props function
 *      - filters
 *          - age (optional) (with test formating)
 *          - weight (optional) (with test formating)
 *          - height (optional) (with test formating)
 *          - hair color filter (optional)
 */

const data_range_empty = {
  min: '',
  max: '',
  range: true,
};

const data_empty = {
  min: '',
  max: '',
  range: true,
};

const data_range_min_max = {
  min: '34',
  max: '128',
  range: true,
};

const data_min_max = {
  min: '34',
  max: '128',
  range: false,
};

const data_max = {
  min: '',
  max: '128',
  range: false,
};

const data_min = {
  min: '34',
  max: '',
  range: false,
};

const data_range_min = {
  min: '34',
  max: '',
  range: true,
};

const data_range_max = {
  min: '',
  max: '128',
  range: true,
};

const colors_full = ['Red', 'Pink', 'Black'];

const props = {
  age: data_range_min_max,
  weight: data_range_min,
  height: data_range_max,
  hair_colors: colors_full,
  onClickFilterIcon: jest.fn(),
};

const emptyAgeHeightWeightProps = {
  age: data_range_empty,
  weight: data_empty,
  height: data_range_empty,
  hair_colors: colors_full,
  onClickFilterIcon: jest.fn(),
};

const emptyHairColorsProps = {
  age: data_range_min_max,
  weight: data_range_min_max,
  height: data_range_min_max,
  hair_colors: [],
  onClickFilterIcon: jest.fn(),
};

describe('FiltersApplied Component tests', () => {
  it('FiltersApplied Snapshot', () => {
    const tree = renderer.create(<FiltersApplied {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render age, weight, height filters', () => {
    const wrapper = shallow(<FiltersApplied {...props} />);
    const ageWeightHEightFilters = wrapper.childAt(0);
    expect(ageWeightHEightFilters.type().displayName).toBe('styled.div');
    expect(ageWeightHEightFilters.props().children[0].props.age).toBe(
      data_range_min_max
    );
    expect(ageWeightHEightFilters.props().children[0].props.weight).toBe(
      data_range_min
    );
    expect(ageWeightHEightFilters.props().children[0].props.height).toBe(
      data_range_max
    );
  });

  it('should render hair_filter', () => {
    const wrapper = shallow(<FiltersApplied {...props} />);
    const hairFilters = wrapper.childAt(1).childAt(0);
    expect(hairFilters.props().hair_colors).toBe(colors_full);
  });

  it('should not render AgeWeightHeightFilters if data_range_empty or data_empty in  age, height and weight. also painr HairFilter in PrimarySection', () => {
    const wrapper = shallow(<FiltersApplied {...emptyAgeHeightWeightProps} />);
    const hairFilters = wrapper.childAt(0).childAt(0);
    expect(hairFilters.props().hair_colors).toBe(colors_full);
  });

  it('should not render hairs in HairFilter if hair_colors is empty', () => {
    const wrapper = shallow(<FiltersApplied {...emptyHairColorsProps} />);
    const ageWeightHeightFilters = wrapper.childAt(0);
    expect(ageWeightHeightFilters.type().displayName).toBe('styled.div');
    expect(ageWeightHeightFilters.props().children[0].props.age).toBe(
      data_range_min_max
    );
    const hairFilters = wrapper.childAt(1);
    expect(hairFilters.type().displayName).toBe('styled.div');
    expect(hairFilters.children().length).toBe(0);
  });
});
