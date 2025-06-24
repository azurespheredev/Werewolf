import BackgroundBox from '../components/shared/BackgroundBox';

export default function WelcomePage() {
  return (
    <BackgroundBox
      src="/images/bg_sunset.jpg"
      className="flex justify-center items-center w-full h-screen"
    >
      <h1>Welcome</h1>
    </BackgroundBox>
  );
}
