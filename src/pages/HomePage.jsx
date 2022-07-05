import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import imageMockups from '../images/image-mockups.png';
import { ReactComponent as BackgroundDesktop } from '../images/bg-intro-desktop.svg';
import {
  ApiIcon,
  BudgetingIcon,
  OnboardingIcon,
  OnlineIcon,
} from '../icons/icons';
import imageCurrency from '../images/image-currency.jpg';
import imageRestaurant from '../images/image-restaurant.jpg';
import imagePlane from '../images/image-plane.jpg';
import imageConfetti from '../images/image-confetti.jpg';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <section id='landing-page'>
          <div className='landing-page_content'>
            <h1>Next generation digital banking</h1>

            <h4>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </h4>

            <Button>Request Invite</Button>
            <img
              className='landing-page_content-phones'
              src={imageMockups}
              alt='phones'
            />
            <div className='landing-page_content-background'>
              <BackgroundDesktop />
            </div>
          </div>
        </section>
        <section id='about-page'>
          <div className='about-page_content'>
            <h2>Why choose Easybank?</h2>
            <h4>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </h4>
            <ul>
              <li>
                <OnlineIcon />
                <h3>Online Banking</h3>
                <p>
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </li>
              <li>
                <BudgetingIcon />
                <h3>Simple Budgeting</h3>
                <p>
                  See exactly where your money goes each month. Receive
                  notifications when you're close to hitting your limits.
                </p>
              </li>
              <li>
                <OnboardingIcon />
                <h3>Fast Onboarding</h3>
                <p>
                  We don't do branches. Open your account in minutes online and
                  start taking control of your finances right away.
                </p>
              </li>
              <li>
                <ApiIcon />
                <h3>Open API</h3>
                <p>
                  Manage your savings, investments, pension, and much more from
                  one account. Tracking your money has never been easier.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section id='articles-page'>
          <div className='articles-page_content'>
            <h2>Latest Articles</h2>
            <ul>
              <li>
                <img src={imageCurrency} alt='currency' />
                <div className='articles-page_content--text'>
                  <h6>By Claire Robinson</h6>
                  <h4>Receive money in any currency with no fees</h4>
                  <p>
                    The world is getting smaller and we’re becoming more mobile.
                    So why should you be forced to only receive money in a
                    single …
                  </p>
                </div>
              </li>
              <li>
                <img src={imageRestaurant} alt='restaurant' />
                <div className='articles-page_content--text'>
                  <h6>By Wilson Hutton</h6>
                  <h4>Treat yourself without worrying about money</h4>
                  <p>
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means you
                    …
                  </p>
                </div>
              </li>
              <li>
                <img src={imagePlane} alt='plane' />
                <div className='articles-page_content--text'>
                  <h6>By Wilson Hutton</h6>
                  <h4>Take your Easybank card wherever you go</h4>
                  <p>
                    We want you to enjoy your travels. This is why we don’t
                    charge any fees on purchases while you’re abroad. We’ll even
                    show you …
                  </p>
                </div>
              </li>
              <li>
                <img src={imageConfetti} alt='confetti' />
                <div className='articles-page_content--text'>
                  <h6>By Claire Robinson</h6>
                  <h4>Our invite-only Beta accounts are now live!</h4>
                  <p>
                    After a lot of hard work by the whole team, we’re excited to
                    launch our closed beta. It’s easy to request an invite
                    through the site ...
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};
export default HomePage;
