import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import imageMockups from '../images/image-mockups.png';
import { ReactComponent as BackgroundDesktop } from '../images/bg-intro-desktop.svg';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <section className='landing-page'>
          <div className='landing-page_content'>
            <h1>Next generation digital banking</h1>

            <h3>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </h3>

            <Button>Request Invite</Button>
          </div>

          <img
            className='landing-page_phones'
            src={imageMockups}
            alt='phones'
          />
          <div className='landing-page_bg'>
            <BackgroundDesktop />
          </div>
        </section>
        <section className='about-page'></section>
      </main>
    </>
  );
};
export default HomePage;
