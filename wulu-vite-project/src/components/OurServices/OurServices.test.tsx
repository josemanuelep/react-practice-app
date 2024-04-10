import { render } from '@testing-library/react';
import React from 'react';
import OurServices, { OurServicesProps } from './OurServices';

describe('OurServices', () => {
    const defaultProps: OurServicesProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<OurServices {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('OurServices')).toBeTruthy();
    });
});
