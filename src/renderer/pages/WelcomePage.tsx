import { useState } from 'react';
import { toast } from 'react-toastify';
import BackgroundBox from '../components/shared/BackgroundBox';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';

export default function WelcomePage() {
  const [serverAddress, setServerAddress] = useState<string>('');

  const handleConnect = () => {
    if (!serverAddress) {
      toast.error('Server IP address is required.');
      return;
    }

    // If we reach this point, the serverAddress is valid
    toast.success('Connecting to server...');
  };

  return (
    <BackgroundBox
      src="/images/bg_welcome.jpg"
      className="flex justify-center items-center w-full h-screen"
    >
      <img
        alt="logo"
        src="/images/logo.png"
        className="absolute top-4 left-4 w-1/6 h-auto"
      />

      <div className="absolute right-0 bottom-0 w-96 anim-shake-to-left">
        <img alt="road_sign" src="/images/road_sign.png" />

        <form className="flex flex-col items-center gap-0 absolute top-20 right-1/2 w-72 translate-x-1/2 rotate-3 p-1 text-red-950">
          <h2 className="text-xl">Enter Server IP Address</h2>
          <Input
            placeholder="172.20.1.1"
            className="w-60 text-3xl"
            value={serverAddress}
            onChange={(e) => setServerAddress(e.target.value)}
          />

          <Button className="w-40 h-14 mt-3" onClick={handleConnect}>
            Connect
          </Button>
        </form>
      </div>
    </BackgroundBox>
  );
}
