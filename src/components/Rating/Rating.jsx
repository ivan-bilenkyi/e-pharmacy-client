export const Rating = ({ rating}) => {
    // Кількість вибілених зірок, які потрібно додати
    const emptyStars = 5 - rating;

    // Масив зірок, які будуть відображені
    const stars = [];

    // Додаємо заповнені зірки
    for (let i = 0; i < rating; i++) {
        stars.push(
            <svg width="18" height="18" key={`star-${i}`} >
                <use href={`${sprite}#star`}></use>
            </svg>
        );
    }

    // Додаємо вибілені зірки
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <svg width="18" height="18" key={`empty-star-${i}`}>
                <use href={`${sprite}#starWhite`}></use>
            </svg>
        );
    }

    return (
        <div>
            <div className='hidden md:flex items-center gap-[6px]'>
                <div className='flex gap-[2px]'>{stars}</div>
                <p>{rating}</p>
            </div>
            <div className='flex md:hidden items-center gap-[6px]'>
                <svg width="18" height="18">
                    <use href={`${sprite}#star`}></use>
                </svg>
                <p>{rating}</p>
            </div>
        </div>
    );
};

import sprite from "../../assets/sprite.svg";
