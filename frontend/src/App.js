import './App.css';
import './index.css';

// Components

import ChannelLink from './components/ChannelLink/ChannelLink';
import Navigation from './components/Navigation/Navigation';
import Badge from './components/Badge/Badge';

// Images

import image3 from './images/1.jpeg';
import image2 from './images/2.jpeg';
import image1 from './images/3.jpeg';
import image4 from './images/4.jpeg';
import image6 from './images/5.jpeg';
import image5 from './images/6.jpeg';
import instaprofilePic from './images/insta.jpg';
import sjsuIcon from './images/sjsu.png';

function App() {
  return (

    <body className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>

      <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">

        <Navigation></Navigation>

        <section>

          <h1 className='font-medium text-2xl mb-8 tracking-tighter'>
            hey, I'm navaneeth 👋
          </h1>

          <p className="text-neutral-300">
            I'm a backend developer, open-source enthusiast, optimist, and stoic based in San Jose, California, I am currently pursuing an M.S. in Computer Science at
            <Badge href="https://www.sjsu.edu/">
              <img
                width="13"
                height="11"
                aria-label="SJSU Logo"
                className="inline-flex mr-1"
                src={sjsuIcon}
              />
              San Jose State University
            </Badge>
            .
          </p>

          <div className="columns-2 sm:columns-3 gap-4 my-8">
            <div className="relative h-40 mb-4">
              <img
                alt="Me speaking on stage at React Summit about the future of Next.js"
                src={image1}
                sizes="(max-width: 768px) 213px, 33vw"
                loading="lazy"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80 mb-4 sm:mb-0">
              <img
                alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
                src={image2}
                sizes="(max-width: 768px) 213px, 33vw"
                loading="lazy"
                className="rounded-lg object-cover object-[-16px] sm:object-center"
              />
            </div>
            <div className="relative h-40 sm:h-80 sm:mb-4">
              <img
                alt="Me standing on stage at Reactathon delivering the keynote"
                src={image3}
                sizes="(max-width: 768px) 213px, 33vw"
                loading="lazy"
                className="rounded-lg object-cover object-top sm:object-center"
              />
            </div>
            <div className="relative h-40 mb-4 sm:mb-0">
              <img
                alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
                src={image4}
                sizes="(max-width: 768px) 213px, 33vw"
                loading="lazy"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-40 mb-4">
              <img
                alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
                src={image5}
                sizes="(max-width: 768px) 213px, 33vw"
                loading="lazy"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80">
              <img
                alt="My badge on top of a pile of badges from a Vercel meetup we held"
                src={image6}
                sizes="(min-width: 768px) 213px, 33vw"
                loading="lazy"
                className="rounded-lg object-cover"
              />
            </div>
          </div>


          <p className="text-neutral-300 mb-6">
            Beyond my academic endeavors, I find joy in the virtual realms of Minecraft and Valorant, as well as the rhythmic world of playing the guitar. My life motto centers around continuous learning, observation, and doing good in response. This unique blend of technical expertise and a philosophical approach fuels my commitment to personal growth and collaborative success.
          </p>

          <p className="text-neutral-300 mb-6">
            Connect with me on social media! Find links to my profiles below for the latest updates and interactions.
          </p>

          <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
            <ChannelLink
              img="https://media.licdn.com/dms/image/D5603AQEpkMnpIEkN8w/profile-displayphoto-shrink_800_800/0/1680153497745?e=1710979200&v=beta&t=tbJqpzqKW44euWA8YOoo1vRRKGuWFQHuCMfWWVPEhJU"
              name="@navaneeth-nidadavolu"
              link="https://www.linkedin.com/in/navaneeth-nidadavolu/"
              icon="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
            />
            <ChannelLink
              img={instaprofilePic}
              name="navaneethnivol"
              link="https://www.instagram.com/navaneethnivol/"
              icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
            />
          </div>

        </section>

      </div>

    </body>

  );
}

export default App;
