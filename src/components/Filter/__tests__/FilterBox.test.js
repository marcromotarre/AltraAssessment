import React from 'react';
import { fireEvent } from '@testing-library/react';
import FilterBox from '../FilterBox';

import { initialState as filtersInitialState } from './../../../redux/reducers/filters';
import { initialState as townInitialState } from './../../../redux/reducers/town';
import { renderRedux } from '../../../utils/test';

/**
 * this component manages Filter mode (Filter Setter o FilterApply )
 */

const props = {
  filteredUsersNumber: 1000,
};

const initialState = {
  filters: filtersInitialState,
  town: townInitialState,
};

describe('FilterBox Component tests', () => {
  it('FilterBox Snapshot', () => {
    expect(
      renderRedux(<FilterBox {...props} />, {
        initialState: initialState,
      }).baseElement
    ).toMatchSnapshot();
  });

  it('FilterBox when !isAnyFilterApplied && !filteringMode show not paint FiltersApplied nor FilterSetter', () => {
    const { queryByTestId } = renderRedux(
      <FilterBox
        filteredUsersNumber={1000}
        isAnyFilterApplied={false}
        filteringMode={false}
      />,
      {
        initialState: initialState,
      }
    );

    expect(queryByTestId('FiltersApplied')).toBeFalsy();
    expect(queryByTestId('FilterSetter')).toBeFalsy();
  });

  it('FilterBox when !isAnyFilterApplied && filteringMode should paint Filters Applied', () => {
    const { queryByTestId } = renderRedux(
      <FilterBox
        filteredUsersNumber={1000}
        isAnyFilterApplied={false}
        filteringMode={true}
      />,
      {
        initialState: initialState,
      }
    );
    expect(queryByTestId('FiltersApplied')).toBeFalsy();
    expect(queryByTestId('FilterSetter')).toBeTruthy();
  });

  it('FilterBox when isAnyFilterApplied && !filteringMode should paint Filters Applied', () => {
    const { queryByTestId } = renderRedux(
      <FilterBox
        filteredUsersNumber={1000}
        isAnyFilterApplied={true}
        filteringMode={false}
      />,
      {
        initialState: initialState,
      }
    );
    expect(queryByTestId('FiltersApplied')).toBeTruthy();
    expect(queryByTestId('FilterSetter')).toBeFalsy();
  });

  it('FilterBox when isAnyFilterApplied && filteringMode should paint Filters Applied', () => {
    const { queryByTestId } = renderRedux(
      <FilterBox
        filteredUsersNumber={1000}
        isAnyFilterApplied={true}
        filteringMode={false}
      />,
      {
        initialState: initialState,
      }
    );
    expect(queryByTestId('FiltersApplied')).toBeTruthy();
    expect(queryByTestId('FilterSetter')).toBeFalsy();
  });

  it('FilterBox when press filter icon button should call prop setFilteringMode', () => {
    const setFilteringMode = jest.fn();
    const { container } = renderRedux(
      <FilterBox
        filteredUsersNumber={1000}
        isAnyFilterApplied={true}
        filteringMode={false}
        setFilteringMode={setFilteringMode}
      />,
      {
        initialState: initialState,
      }
    );
    expect(setFilteringMode).toHaveBeenCalledTimes(0);
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(setFilteringMode).toHaveBeenCalledTimes(1);
  });
});
