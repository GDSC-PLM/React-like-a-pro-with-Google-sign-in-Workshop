import IconCode from '../../assets/svg/icon_code.svg';
import WebdevPic from '../../assets/png/pic_webdev.png';

const Landing = () => {
  return (
    <section id='Hero'>
      {/* Landing text  */}
      <div>
        {/* React like a pro icon and text */}
        <div class='flex-container'>
          <img src={IconCode} alt='' id='dev-logo' />
          <p>Innovative Solutions for a Better Future</p>
        </div>
        <h1>React like a pro with Google sign-in</h1>
        <p>Learn Google Authentication with a ReactJS Project</p>
        <time datetime='2023-13-19 13:00'>March 19, 2023</time>
        <p>1:00 - 4:00 PM</p>
       
      </div>
      {/* Web Dev Picture */}
      <img src={WebdevPic} alt='Web dev picture' />
    </section>
  );
};

export default Landing;
