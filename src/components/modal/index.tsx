import React, { FC } from 'react';
import { useAppSelector } from 'utils/hooks';

const modalRoot = document.getElementById('#modal-root') as HTMLElement;

const Modal: React.FC<{}> = ({ children }) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    // Use this in case CRA throws an error about react-hooks/exhaustive-deps
    const { current } = el;

    // We assume `modalRoot` exists with '!'
    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, []);

  return createPortal(children, el.current);
};

export default Modal;
