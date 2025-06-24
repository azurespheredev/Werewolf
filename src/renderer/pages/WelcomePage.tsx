import BackgroundBox from '../components/shared/BackgroundBox';

export default function WelcomePage() {
  return (
    <BackgroundBox
      src="/images/bg_sunset.jpg"
      className="flex justify-center items-center w-full h-screen"
    >
      <div className="absolute right-0 bottom-0 w-96">
        <img alt="road_sign" src="/images/road_sign.png" />
        <h2 className="absolute top-12 right-0">Enter Server IP Address</h2>
        {/* <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 rounded"
        /> */}
      </div>
    </BackgroundBox>
  );
}
