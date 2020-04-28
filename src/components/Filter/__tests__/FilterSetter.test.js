import React from 'react';
import { fireEvent } from '@testing-library/react';
import FilterSetter from '../FilterSetter';
import { initialState as filtersInitialState } from './../../../redux/reducers/filters';
import { initialState as townInitialState } from './../../../redux/reducers/town';

import { renderRedux } from './../../../utils/test';
/** this component should:
 *  - allow user to activate and desactivate filters
 *      - age: min max filter
 *          - clear click on clean icon (only visible when filter is not empty)
 *      - height: min max filter
 *          - clear click on clean icon (only visible when filter is not empty)
 *      - weight: min max filter
 *          - clear click on clean icon (only visible when filter is not empty)
 *      - hair_colors: array filter
 *          - clear click on clean icon (only visible when filter is not empty)
 *      - see how many users pass the filters
 *
 */

const numericEvent34 = {
  target: {
    value: '34',
  },
};

const numericEvent50 = {
  target: {
    value: '50',
  },
};

const initialState = {
  filters: filtersInitialState,
  town: townInitialState,
};

describe('FilterSetter Component', () => {
  it('FilterSetter Snapshot', () => {
    expect(
      renderRedux(<FilterSetter filteredUsersNumber={1000} />, {
        initialState: initialState,
      }).baseElement
    ).toMatchSnapshot();
  });
  it('age min value changes when change filter min input', () => {
    const { getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: initialState,
      }
    );

    const ageMinInput = getByTestId('Age-filterminmax-min-input');
    expect(ageMinInput.value).toBe('');
    fireEvent.change(ageMinInput, numericEvent34);
    expect(ageMinInput.value).toBe('34');
  });

  it('age max value changes when change filter max input', () => {
    const { getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: initialState,
      }
    );
    const ageMaxInput = getByTestId('Age-filterminmax-max-input');
    expect(ageMaxInput.value).toBe('');
    fireEvent.change(ageMaxInput, numericEvent50);
    expect(ageMaxInput.value).toBe('50');
  });

  it('age range click', () => {
    const { queryByTestId, getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: initialState,
      }
    );

    const ageShowHideButton = getByTestId('Age-filterminmax-show-hide-button');
    expect(queryByTestId('Age-filterminmax-min-input')).toBeTruthy();
    expect(queryByTestId('Age-filterminmax-max-input')).toBeTruthy();
    fireEvent.click(ageShowHideButton);
    expect(queryByTestId('Age-filterminmax-min-input')).toBeTruthy();
    expect(queryByTestId('Age-filterminmax-max-input')).toBeFalsy();
    fireEvent.click(ageShowHideButton);
    expect(queryByTestId('Age-filterminmax-min-input')).toBeTruthy();
    expect(queryByTestId('Age-filterminmax-max-input')).toBeTruthy();
  });

  it('age clear icon click', () => {
    const { getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: {
          ...initialState,
          filters: {
            ...initialState.filters,
            age: { min: '34', max: '50', range: true },
          },
        },
      }
    );
    const ageMinInput = getByTestId('Age-filterminmax-min-input');
    const ageMaxInput = getByTestId('Age-filterminmax-max-input');

    expect(ageMinInput.value).toBe('34');
    expect(ageMaxInput.value).toBe('50');

    const clearAgeIcon = getByTestId('clear-age-icon');
    fireEvent.click(clearAgeIcon);
    expect(ageMinInput.value).toBe('');
    expect(ageMaxInput.value).toBe('');
  });

  it('height min value changes when change filter min input', () => {
    const { getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: initialState,
      }
    );
    const heightMinInput = getByTestId('Height-filterminmax-min-input');
    expect(heightMinInput.value).toBe('');
    fireEvent.change(heightMinInput, numericEvent34);
    expect(heightMinInput.value).toBe('34');
  });

  it('height max value changes when change filter min input', () => {
    const { getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: initialState,
      }
    );
    const heightMaxInput = getByTestId('Height-filterminmax-max-input');
    expect(heightMaxInput.value).toBe('');
    fireEvent.change(heightMaxInput, numericEvent50);
    expect(heightMaxInput.value).toBe('50');
  });

  it('height range click', () => {
    const { queryByTestId, getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: initialState,
      }
    );

    const heightShowHideButton = getByTestId(
      'Height-filterminmax-show-hide-button'
    );
    expect(queryByTestId('Height-filterminmax-min-input')).toBeTruthy();
    expect(queryByTestId('Height-filterminmax-max-input')).toBeTruthy();
    fireEvent.click(heightShowHideButton);
    expect(queryByTestId('Height-filterminmax-min-input')).toBeTruthy();
    expect(queryByTestId('Height-filterminmax-max-input')).toBeFalsy();
    fireEvent.click(heightShowHideButton);
    expect(queryByTestId('Height-filterminmax-min-input')).toBeTruthy();
    expect(queryByTestId('Height-filterminmax-max-input')).toBeTruthy();
  });

  it('height clear icon click', () => {
    const { getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: {
          ...initialState,
          filters: {
            ...initialState.filters,
            height: { min: '34', max: '50', range: true },
          },
        },
      }
    );
    const weightMinInput = getByTestId('Height-filterminmax-min-input');
    const weightMaxInput = getByTestId('Height-filterminmax-max-input');

    expect(weightMinInput.value).toBe('34');
    expect(weightMaxInput.value).toBe('50');

    const clearAgeIcon = getByTestId('clear-height-icon');
    fireEvent.click(clearAgeIcon);
    expect(weightMinInput.value).toBe('');
    expect(weightMaxInput.value).toBe('');
  });

  it('weight min value changes when change filter min input', () => {
    const { getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: initialState,
      }
    );
    const weightMinInput = getByTestId('Weight-filterminmax-min-input');
    expect(weightMinInput.value).toBe('');
    fireEvent.change(weightMinInput, numericEvent34);
    expect(weightMinInput.value).toBe('34');
  });

  it('weight max value changes when change filter min input', () => {
    const { getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: initialState,
      }
    );
    const weightMaxInput = getByTestId('Weight-filterminmax-max-input');
    expect(weightMaxInput.value).toBe('');
    fireEvent.change(weightMaxInput, numericEvent50);
    expect(weightMaxInput.value).toBe('50');
  });

  it('weight range click', () => {
    const { queryByTestId, getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: initialState,
      }
    );

    const weightShowHideButton = getByTestId(
      'Weight-filterminmax-show-hide-button'
    );
    expect(queryByTestId('Weight-filterminmax-min-input')).toBeTruthy();
    expect(queryByTestId('Weight-filterminmax-max-input')).toBeTruthy();
    fireEvent.click(weightShowHideButton);
    expect(queryByTestId('Weight-filterminmax-min-input')).toBeTruthy();
    expect(queryByTestId('Weight-filterminmax-max-input')).toBeFalsy();
    fireEvent.click(weightShowHideButton);
    expect(queryByTestId('Weight-filterminmax-min-input')).toBeTruthy();
    expect(queryByTestId('Weight-filterminmax-max-input')).toBeTruthy();
  });

  it('weight clear icon click', () => {
    const { getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: {
          ...initialState,
          filters: {
            ...initialState.filters,
            weight: { min: '34', max: '50', range: true },
          },
        },
      }
    );
    const weightMinInput = getByTestId('Weight-filterminmax-min-input');
    const weightMaxInput = getByTestId('Weight-filterminmax-max-input');

    expect(weightMinInput.value).toBe('34');
    expect(weightMaxInput.value).toBe('50');

    const clearAgeIcon = getByTestId('clear-weight-icon');
    fireEvent.click(clearAgeIcon);
    expect(weightMinInput.value).toBe('');
    expect(weightMaxInput.value).toBe('');
  });

  it('hair selected onClick', () => {
    const { getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: {
          ...initialState,
          town: {
            ...initialState.town,
            uniqueHairColors: ['Red', 'Green', 'Pink'],
          },
        },
      }
    );
    const hair0 = getByTestId('Hair Color-button-0');
    const hair1 = getByTestId('Hair Color-button-1');
    const hair2 = getByTestId('Hair Color-button-2');

    expect(hair0.querySelector('svg').getAttribute('color')).toBe(
      'rgba(0,0,0,0)'
    );
    expect(hair1.querySelector('svg').getAttribute('color')).toBe(
      'rgba(0,0,0,0)'
    );
    expect(hair2.querySelector('svg').getAttribute('color')).toBe(
      'rgba(0,0,0,0)'
    );

    fireEvent.click(hair0);
    expect(hair0.querySelector('svg').getAttribute('color')).toBe('Red');
    fireEvent.click(hair0);
    expect(hair0.querySelector('svg').getAttribute('color')).toBe(
      'rgba(0,0,0,0)'
    );
  });

  it('hair color clear icon click', () => {
    const { getByTestId } = renderRedux(
      <FilterSetter filteredUsersNumber={1000} />,
      {
        initialState: {
          ...initialState,
          filters: {
            ...initialState.filters,
            hair_colors: ['Pink', 'Red'],
          },
          town: {
            ...initialState.town,
            uniqueHairColors: ['Red', 'Green', 'Pink'],
          },
        },
      }
    );
    const hair0 = getByTestId('Hair Color-button-0');
    const hair1 = getByTestId('Hair Color-button-1');
    const hair2 = getByTestId('Hair Color-button-2');

    expect(hair0.querySelector('svg').getAttribute('color')).toBe('Red');
    expect(hair1.querySelector('svg').getAttribute('color')).toBe(
      'rgba(0,0,0,0)'
    );
    expect(hair2.querySelector('svg').getAttribute('color')).toBe('Pink');

    const clearColorsIcon = getByTestId('clear-colors-icon');
    fireEvent.click(clearColorsIcon);

    expect(hair0.querySelector('svg').getAttribute('color')).toBe(
      'rgba(0,0,0,0)'
    );
    expect(hair1.querySelector('svg').getAttribute('color')).toBe(
      'rgba(0,0,0,0)'
    );
    expect(hair2.querySelector('svg').getAttribute('color')).toBe(
      'rgba(0,0,0,0)'
    );
  });
});
