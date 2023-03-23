import PlmCssLogo from '../../assets/svg/logos/logo_plm_css.svg';
import IcpepLogo from '../../assets/svg/logos/logo_icpep.svg';
import PlmSiteLogo from '../../assets/svg/logos/logo_plm_site.svg';

const Footer = () => {
  return (
    <footer id='Partners'>
      <p>Major Partners</p>
      {/* Major Partners logo  */}
      <div class='logo-container'>
        <img
          src={PlmCssLogo}
          alt='PLM Computer Science Society logo'
          class='major-logo'
        />
        <img
          src={IcpepLogo}
          alt='Institute of Computer Engineers of the Philippines logo'
          class='major-logo'
        />
      </div>
      {/* Divider  */}
      <div class='vertical'></div>
      <p>Minor Partner</p>
      <img
        src={PlmSiteLogo}
        alt='PLM Society of Information Technology Enthusiasts logo'
        id='minor-logo'
      />
    </footer>
  );
};

export default Footer;
