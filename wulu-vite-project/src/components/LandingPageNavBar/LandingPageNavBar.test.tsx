import { render } from '@testing-library/react';
import LandingPageNavBar from './LandingPageNavBar';

describe('LandingPageNavBar', () => {


    it('should render', () => {

        const { asFragment, queryByText } = render(<LandingPageNavBar />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('LandingPageNavBar')).toBeTruthy();
    });
});
