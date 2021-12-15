import { useState } from 'react';

export const useNavModal = () => {
  const [navModal, setNavModal] = useState(false);
  const openModal = () => {
    setNavModal(true);
  };
  const closeModal = e => {
    e.preventDefault();
    setNavModal(false);
  };

  return { navModal, openModal, closeModal };
};
