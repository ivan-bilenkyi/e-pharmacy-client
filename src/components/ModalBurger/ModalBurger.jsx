import { useEffect, useCallback, useState } from 'react';
import sprite from "../../assets/sprite.svg"

export const ModalBurger = ({ isOpen, onClose, children }) => {
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
                    className="fixed inset-0 z-50 flex justify-end bg-bgModalBurger "
                    onClick={handleClickOutside}
                >
                    <div
                        className={`relative w-[210px] h-full bg-green transform transition-transform duration-300 ${
                            isVisible ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div className="pt-[260px] pb-[64px] h-full">
                            {children}
                        </div>

                        <button onClick={onClose} className="absolute top-[31px] right-[20px]">
                            <svg width="32" height="32">
                                <use href={`${sprite}#close-modal`}></use>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
