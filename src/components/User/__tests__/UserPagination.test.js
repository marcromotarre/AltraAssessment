import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import UserPagination from '../UserPagination';

/** this component should:
 *  - render button style like UserElement with a label with a text defined by props
 *          -  when click the button call props function
 */

const props = {
  onClick: jest.fn(),
  text: 'text',
};

describe('User Pagination Component tests', () => {
  it('render UserPagination Snapshot', () => {
    const tree = renderer.create(<UserPagination {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render default props text if no text passed on props', () => {
    const { container } = render(<UserPagination />);
    const label = container.querySelector('label');
    expect(label.innerHTML).toBe('Load more users');
  });

  it('should render props text', () => {
    const { container } = render(<UserPagination {...props} />);
    const label = container.querySelector('label');
    expect(label.innerHTML).toBe(props.text);
  });

  it('call props onClick function when on click', () => {
    const { container } = render(<UserPagination {...props} />);
    const button = container.querySelector('button');
    expect(props.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
