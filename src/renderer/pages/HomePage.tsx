import BackgroundBox from '../components/shared/BackgroundBox';
import Button from '../components/shared/Button';

export default function HomePage() {
  return (
    <BackgroundBox
      src="/images/bg_home.jpg"
      className="flex justify-center items-center w-full h-screen"
    >
      <div className="flex flex-col gap-8 items-center">
        <img
          alt="logo"
          src="/images/logo.png"
          className="w-80 anim-slide-to-bottom"
        />

        <Button className="w-60 px-8 py-4 anim-slide-to-top">
          Create Room
        </Button>
        <Button className="w-60 px-8 py-4 anim-slide-to-top">Join Room</Button>
        <Button className="w-60 px-8 py-4 anim-slide-to-top">Quit Game</Button>
      </div>
    </BackgroundBox>
  );
}
