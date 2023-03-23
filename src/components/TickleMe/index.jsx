import HaribotPic from '../../assets/svg/haribots/haribot.svg';
import HoneyDroidPic from '../../assets/svg/haribots/honeydroid.svg';
import PopstronPic from '../../assets/svg/haribots/popstron.svg';
import BabyBusterPic from '../../assets/svg/haribots/babybuster.svg';
import SiborgPic from '../../assets/svg/haribots/siborg.svg';

const TickleMe = () => {
  return (
    <section id='Tickle-Me'>
      {/* Tickle Me title and text */}
      <header>
        <h2>Tickle Me!</h2>
        <p>Click each characters to hear them tweet</p>
      </header>
      {/* Haribot characters */}
      <div class='grid-container'>
        {/* Haribot frame  */}
        <div id='Haribot'>
          <img src={HaribotPic} alt='Haribot' />
          <button>Haribot</button>
        </div>
        {/* Honey Droid frame  */}
        <div id='HoneyDroid'>
          <img src={HoneyDroidPic} alt='Honey Droid' />
          <button>HoneyDroid</button>
        </div>
        {/* Popstron frame  */}
        <div id='Popstron'>
          <img src={PopstronPic} alt='Popstron' />
          <button>Popstron</button>
        </div>
        {/* Baby Buster frame  */}
        <div id='BabyBuster'>
          <img src={BabyBusterPic} alt='Baby Buster' />
          <button>BabyBuster</button>
        </div>
        {/* Siborg frame  */}
        <div id='Siborg'>
          <img src={SiborgPic} alt='Siborg' />
          <button>Siborg</button>
        </div>
      </div>
    </section>
  );
};

export default TickleMe;
