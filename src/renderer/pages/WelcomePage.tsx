import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BackgroundBox from '../components/shared/BackgroundBox';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import { configureApiService, getApiService } from '../../services/apiService';
import { LocalStorageKeyEnum, RouteEnum } from '../../lib/enums';
import { SERVER_PORT } from '../../lib/constants';

export default function WelcomePage() {
  const [serverAddress, setServerAddress] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleConnect = useCallback(
    async (address: string) => {
      if (!address) {
        toast.error('Please fill the required field.');
        return;
      }

      try {
        setIsLoading(true);

        configureApiService(`${address}:${SERVER_PORT}`);
        const apiService = getApiService();
        await apiService.get('/');

        window.electron.ipcRenderer.sendMessage('maximize-window');

        localStorage.setItem(LocalStorageKeyEnum.SERVER_ADDRESS, address);
        toast.success('Connected to the server!');
        navigate(RouteEnum.HOME);
      } catch (errorMessage) {
        toast.error(String(errorMessage));
      } finally {
        setIsLoading(false);
      }
    },
    [navigate],
  );

  useEffect(() => {
    const serverAddressFromStorage = localStorage.getItem(
      LocalStorageKeyEnum.SERVER_ADDRESS,
    );

    if (serverAddressFromStorage) {
      setServerAddress(serverAddressFromStorage);
      handleConnect(serverAddressFromStorage);
    }
  }, [handleConnect]);

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

        <div className="flex flex-col items-center gap-0 absolute top-20 right-1/2 w-72 translate-x-1/2 rotate-3 p-1 text-red-950">
          <h2 className="text-xl">Enter Server IP Address</h2>
          <Input
            placeholder="172.20.1.1"
            className="w-60 text-3xl"
            value={serverAddress}
            onChange={(e) => setServerAddress(e.target.value)}
            disabled={isLoading}
          />

          <Button
            className="w-40 h-14 mt-3"
            onClick={() => handleConnect(serverAddress)}
            loading={isLoading}
          >
            Connect
          </Button>
        </div>
      </div>
    </BackgroundBox>
  );
}
