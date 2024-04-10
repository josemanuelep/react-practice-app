import { render } from '@testing-library/react';
import React from 'react';
import LandingPageBanner, { LandingPageBannerProps } from './LandingPageBanner';

describe('LandingPageBanner', () => {
    const defaultProps: LandingPageBannerProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<LandingPageBanner {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('LandingPageBanner')).toBeTruthy();
    });
});
