import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import FilterMinMax from '../FilterMinMax';

/** this component should:
 *  - render FilterMinMax with:
 *      - filter title
 *      - to label (only renders if showTo is true):
 *      - show hide button (allow to show hide calling external function)
 *      - min:
 *          - input value (allow change value calling external function)
 *                  - only changes with numbers
 *          - total information, round floor (only renders if showTo is true)
 *      - max (only renders if showTo is true):
 *          - input value, round ceil (allow change value calling external function)
 *                  - only changes with numbers
 *          - total information
 */

const props = {
  title: 'title',
  minLimit: 10.9,
  maxLimit: 11.2,
  minInputValue: '23',
  maxInputValue: '45',
  minChanged: jest.fn(),
  maxChanged: jest.fn(),
  showToChanged: jest.fn(),
};

const numericEvent = {
  target: {
    value: '34',
  },
};

const nonNumericEvent = {
  target: {
    value: '34e',
  },
};

describe('FilterMinMax Component tests', () => {
  it('FilterMinMax Snapshot', () => {
    const tree = renderer.create(<FilterMinMax {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('FilterMinMax renders title', () => {
    const wrapper = shallow(<FilterMinMax {...props} />);
    const title = wrapper.childAt(0);
    expect(title.type().displayName).toBe('styled.label');
    expect(title.text()).toBe(`${props.title}:`);
  });

  it('FilterMinMax renders min input', () => {
    const wrapper = shallow(<FilterMinMax {...props} />);
    const minInput = wrapper.childAt(1);
    expect(minInput.type().displayName).toBe('styled.input');
    expect(minInput.prop('value')).toBe(`${props.minInputValue}`);
  });

  it('props.minChanged is called when user write a number, min input value does not change', () => {
    const { getByTestId } = render(<FilterMinMax {...props} />);
    const minInput = getByTestId('title-filterminmax-min-input');
    expect(minInput.value).toBe(`${props.minInputValue}`);
    expect(props.minChanged).toHaveBeenCalledTimes(0);
    fireEvent.change(minInput, nonNumericEvent);
    expect(props.minChanged).toHaveBeenCalledTimes(0);
    fireEvent.change(minInput, numericEvent);
    expect(props.minChanged).toHaveBeenCalledWith(numericEvent.target.value);
    expect(props.minChanged).toHaveBeenCalledTimes(1);
    expect(minInput.value).toBe(`${props.minInputValue}`);
  });

  it('FilterMinMax renders MinValueInfo', () => {
    const wrapper = shallow(<FilterMinMax {...props} />);
    const minValueInfo = wrapper.childAt(2);
    expect(minValueInfo.type().displayName).toBe('styled.label');
    expect(minValueInfo.text()).toBe(`min: ${Math.floor(props.minLimit)}`);
  });

  it('FilterMinMax renders title', () => {
    const wrapper = shallow(<FilterMinMax {...props} />);
    const to = wrapper.childAt(3);
    expect(to.type().displayName).toBe('styled.label');
    expect(to.text()).toBe(`to`);
  });

  it('FilterMinMax renders max input', () => {
    const wrapper = shallow(<FilterMinMax {...props} />);
    const maxInput = wrapper.childAt(4);
    expect(maxInput.type().displayName).toBe('styled.input');
    expect(maxInput.prop('value')).toBe(`${props.maxInputValue}`);
  });

  it('props.maxChanged is called when user write a number, max input value does not change', () => {
    const { getByTestId } = render(<FilterMinMax {...props} />);
    const maxInput = getByTestId('title-filterminmax-max-input');
    expect(maxInput.value).toBe(`${props.maxInputValue}`);
    expect(props.maxChanged).toHaveBeenCalledTimes(0);
    fireEvent.change(maxInput, nonNumericEvent);
    expect(props.maxChanged).toHaveBeenCalledTimes(0);
    fireEvent.change(maxInput, numericEvent);
    expect(props.maxChanged).toHaveBeenCalledWith(numericEvent.target.value);
    expect(props.maxChanged).toHaveBeenCalledTimes(1);
    expect(maxInput.value).toBe(`${props.maxInputValue}`);
  });

  it('FilterMinMax renders MaxValueInfo', () => {
    const wrapper = shallow(<FilterMinMax {...props} />);
    const maxValueInfo = wrapper.childAt(5);
    expect(maxValueInfo.type().displayName).toBe('styled.label');
    expect(maxValueInfo.text()).toBe(`max: ${Math.ceil(props.maxLimit)}`);
  });

  it('props.showToChanged is called when user write click on show hide button', () => {
    const { getByTestId } = render(<FilterMinMax {...props} />);
    const showHideButton = getByTestId('title-filterminmax-show-hide-button');
    expect(props.showToChanged).toHaveBeenCalledTimes(0);
    fireEvent.click(showHideButton);
    expect(props.showToChanged).toHaveBeenCalledWith(false);
    expect(props.showToChanged).toHaveBeenCalledTimes(1);
  });
});
