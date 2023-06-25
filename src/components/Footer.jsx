import PropTypes from 'prop-types';
import SocialButton from './SocialButton.jsx'

const Footer = ({line1,line2}) => {
    return (
        <>
        <div className="Footer">
        <div className="socials">
        <SocialButton socialMedia="github" link="https://github.com/sergiorioseco"></SocialButton>
        <SocialButton socialMedia="linkedin" link="https://www.linkedin.com/in/sergio-rioseco-carrasco-801947224/"></SocialButton>
        </div>
        <p>{line1}</p>
        <p>{line2}</p>
        </div>
        </>
        );
        };

        Footer.propTypes = {
            line1: PropTypes.string.isRequired,
            line2: PropTypes.string.isRequired
            };

    export default Footer;