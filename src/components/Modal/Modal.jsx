import { useEffect, useCallback, useState } from 'react';
import sprite from "../../assets/sprite.svg";

export const Modal = ({ isOpen, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleEscape = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.addEventListener('keydown', handleEscape);
        } else {
            setIsVisible(false);
            document.removeEventListener('keydown', handleEscape);
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, handleEscape]);

    const handleClickOutside = (event) => {
        if (event.target.id === 'modal-overlay') {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-bgModalBurger"
                    onClick={handleClickOutside}
                >
                    <div
                        className={`relative bg-white transform transition-transform duration-300 w-[343px] h-fit rounded-[20px] py-[40px] px-[32px] ${
                            isVisible ? 'scale-100' : 'scale-95'
                        }`}
                    >
                        <div className="">
                            {children}
                        </div>

                        <button onClick={onClose} className="absolute top-[31px] right-[20px]">
                            <svg width="20" height="20">
                                <use href={`${sprite}#close-modal-dark`}></use>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
