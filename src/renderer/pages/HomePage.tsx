import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundBox from '../components/shared/BackgroundBox';
import Button from '../components/shared/Button';
import Modal from '../components/shared/Modal';
import { RouteEnum } from '../../lib/enums';

export default function HomePage() {
  const [isExitDialogOpen, setIsExitDialogOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const openDialog = () => setIsExitDialogOpen(true);
  const closeDialog = () => setIsExitDialogOpen(false);
  const handleExit = () => window.close();

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

        <Button
          className="w-60 px-8 py-4 anim-slide-to-top"
          onClick={() => navigate(RouteEnum.CREATE_ROOM)}
        >
          Create Room
        </Button>
        <Button
          className="w-60 px-8 py-4 anim-slide-to-top"
          onClick={() => navigate(RouteEnum.JOIN_ROOM)}
        >
          Join Room
        </Button>
        <Button
          className="w-60 px-8 py-4 anim-slide-to-top"
          onClick={openDialog}
        >
          Quit Game
        </Button>
      </div>

      <Modal isOpen={isExitDialogOpen}>
        <h1 className="text-xl">Are you sure you want to exit?</h1>

        <div className="flex gap-8">
          <Button className="w-40 px-4 py-3" onClick={handleExit}>
            Yes
          </Button>
          <Button className="w-40 px-4 py-3" onClick={closeDialog}>
            No
          </Button>
        </div>
      </Modal>
    </BackgroundBox>
  );
}
