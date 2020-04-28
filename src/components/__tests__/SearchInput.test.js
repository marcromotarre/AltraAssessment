import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import SearchInput, { useInputValue } from '../SearchInput';

/** this component should:
 *  - allow user to write characters in input
 *  - call a search function every time that users write a character
 */

//jest mock es6 import
// see svg parcel library

//https://diessi.ca/blog/how-to-exclude-css-images-anything-from-unit-tests/
describe('Search Component tests', () => {
  const props = {
    onSearch: jest.fn(),
  };

  const event = {
    target: {
      value: 'text',
    },
  };

  it('render SearchInput Snapshot', () => {
    const tree = renderer.create(<SearchInput {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('useInputValue hook change inputValue when call handleInputChange', () => {
    const { result } = renderHook(() => useInputValue(() => {}));
    act(() => {
      result.current.handleInputChange(event);
    });
    expect(result.current.inputValue).toBe(event.target.value);
  });

  it('search value is modified when user change input', () => {
    const { getByTestId } = render(<SearchInput {...props} />);
    const search = getByTestId('search-input');
    expect(search.value).toBe('');
    expect(props.onSearch).toHaveBeenCalledTimes(0);
    fireEvent.change(search, event);
    expect(props.onSearch).toHaveBeenCalledWith(event.target.value);
    expect(props.onSearch).toHaveBeenCalledTimes(1);
    expect(search.value).toBe(event.target.value);
  });
});
