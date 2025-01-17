import React, { useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import sliderImg from '../../images/top_slider.jpg';
import SliderCardTop from '../SliderCardTop/SliderCardTop';

const sliderData = [
  {
    id: 1,
    img: sliderImg,
    title: 'Курс по Римской мозаике однодневный',
    text: 'Мы проводим мастер-классы по живописи и гончарному делу для деток и взрослых.\n'
            // eslint-disable-next-line max-len
            + 'Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей. Вы как ученик обязательно прочувствуете нашу дружескую и лёгкую атмосферу.',
  },
  {
    id: 2,
    img: sliderImg,
    title: 'Подарочные сертификаты',
    text: 'Мы проводим мастер-классы по живописи и гончарному делу для деток и взрослых.\n'
            // eslint-disable-next-line max-len
            + 'Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей. Вы как ученик обязательно прочувствуете нашу дружескую и лёгкую атмосферу.',
  },
  {
    id: 3,
    img: sliderImg,
    title: 'Курс по Римской мозаике однодневный',
    text: 'Мы проводим мастер-классы по живописи и гончарному делу для деток и взрослых.\n'
            // eslint-disable-next-line max-len
            + 'Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей. Вы как ученик обязательно прочувствуете нашу дружескую и лёгкую атмосферу.',
  },
  {
    id: 4,
    img: sliderImg,
    title: 'Курс по Римской мозаике однодневный',
    text: 'Мы проводим мастер-классы по живописи и гончарному делу для деток и взрослых.\n'
            // eslint-disable-next-line max-len
            + 'Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей. Вы как ученик обязательно прочувствуете нашу дружескую и лёгкую атмосферу.',
  },
  {
    id: 5,
    img: sliderImg,
    title: 'Курс по Римской мозаике однодневный',
    text: 'Мы проводим мастер-классы по живописи и гончарному делу для деток и взрослых.\n'
            // eslint-disable-next-line max-len
            + 'Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей. Вы как ученик обязательно прочувствуете нашу дружескую и лёгкую атмосферу.',
  },
];

const Slider = () => {
  const [sliders, setSliders] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(1);

  const fetchSliders = async () => {
    const response = await fetch('http://127.0.0.1/api/v1/main_carousel/', {
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    setSliders(data);
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderIndex(sliderIndex + 1);
    }, 5000);

    const lastSliderIndex = sliders.length;
    if (sliderIndex < 0) {
      setSliderIndex(lastSliderIndex);
    }
    if (sliderIndex > lastSliderIndex) {
      setSliderIndex(1);
    }

    return () => clearTimeout(timer);
  }, [sliderIndex, sliders.length]);

  return (
    <section className={styles.slider}>
      <ul className={styles.slider__top}>
        {sliders.map((slide) => {
          let position = 'next';
          if (slide.order === sliderIndex) {
            position = 'active';
          }
          return (
            <li
              key={slide.order}
              className={`${styles.slider__item} ${sliderIndex === slide.order
                ? `${styles.active}` : `${styles[position]}`}`}
            >
              <SliderCardTop {...slide} />
            </li>
          );
        })}
      </ul>

      <ul className={styles.slider__dots}>
        {sliders.map((slide) => (
          <li key={slide.order}>
            <button
              onClick={() => setSliderIndex(slide.order)}
              aria-label="сладер пагинация"
              type="button"
              className={`${styles.slider__dot} ${sliderIndex === slide.order ? `${styles.slider__dot_active}` : ''}`}
            />
          </li>
        ))}
      </ul>

      <div className={styles.slider__counter}>
        0
        {sliderIndex}
        /0
        {sliders.length}
      </div>
    </section>
  );
};

export default Slider;
