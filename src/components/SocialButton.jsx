import PropTypes from 'prop-types';

function SocialButton({socialMedia, link}) {

    return (
      <>
      <div className="SocialButton">
      <a href={link} target="_blank" rel="noreferrer">
      <i className={`fa-brands fa-${socialMedia}`}></i>
      </a>
      </div>
      </>
    )
  }

  SocialButton.propTypes = {
    socialMedia: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  };
  export default SocialButton