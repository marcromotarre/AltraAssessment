import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import FilterMultipleSelection from '../FilterMultipleSelection';

/** this component should:
 *  - render FilterMultipleSelection with:
 *      - set a button to each child
 *              - call prop clickOnElement when the button is clicked function receive element index as paramater
 */

const props = {
  title: 'title',
  clickOnElement: jest.fn(),
};

describe('FilterMultipleSelection Component tests', () => {
  it('FilterMultipleSelection Snapshot', () => {
    const tree = renderer
      .create(
        <FilterMultipleSelection {...props}>
          {['div', 'div', 'div'].map((element, index) => (
            <div key={index}></div>
          ))}
        </FilterMultipleSelection>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('FilterMultipleSelection when click on a button call prop clickOnElement with index value', () => {
    const { getByTestId } = render(
      <FilterMultipleSelection {...props}>
        {['div', 'div', 'div'].map((element, index) => (
          <div key={index}></div>
        ))}
      </FilterMultipleSelection>
    );
    expect(props.clickOnElement).toHaveBeenCalledTimes(0);
    const button0 = getByTestId('title-button-0');
    fireEvent.click(button0);
    expect(props.clickOnElement).toHaveBeenCalledTimes(1);
    expect(props.clickOnElement).toHaveBeenLastCalledWith('0');
    const button1 = getByTestId('title-button-1');
    fireEvent.click(button1);
    expect(props.clickOnElement).toHaveBeenCalledTimes(2);
    expect(props.clickOnElement).toHaveBeenLastCalledWith('1');
    const button2 = getByTestId('title-button-2');
    fireEvent.click(button2);
    expect(props.clickOnElement).toHaveBeenCalledTimes(3);
    expect(props.clickOnElement).toHaveBeenLastCalledWith('2');
  });
});
