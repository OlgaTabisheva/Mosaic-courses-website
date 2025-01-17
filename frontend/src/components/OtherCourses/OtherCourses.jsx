import courseImgOne from '../../images/course-img-1.png';
import courseImgTwo from '../../images/course-img-2.png';
import cls from './OtherCourses.module.scss';

export const OtherCourses = () => {
  return (
    <div className={cls.section}>
      <div className={cls.containerInfo}>
        <div className={cls.contanerCourseOne}>
          <div className={cls.wrapper}>
            <img
              className={cls.courseImage}
              src={courseImgOne}
              alt="Промо картинка"
            />
          </div>
          <div className={cls.courseBox}>
            <h4 className={cls.courseName}>
              Недельный Курс по мозаике из стекла
            </h4>
            <div className={cls.wrapperAtribut}>
              <div className={cls.priceContainer}>
                {/* <div className={cls.iconContainer}> */}
                <div className={cls.timeIcon} />
                {/* </div> */}
                <p>3 часа</p>
              </div>
              <div className={cls.priceContainer}>
                <div className={cls.rubleIcon} />

                <p>4000 рублей</p>
              </div>
            </div>

            <p className={cls.description}>
              Мы делаем рисование доступным с помощью пошаговой программы и
              вовлечённых преподавателей.
            </p>
            <button className={cls.btnWhite} type="button">
              Узнать подробнее
            </button>
          </div>
        </div>
        <div className={cls.contanerCourseTwo}>
          <div className={cls.wrapper}>
            <img
              className={cls.courseImage}
              src={courseImgTwo}
              alt="Промо картинка"
            />
          </div>
          <div className={cls.courseBox}>
            <h4 className={cls.courseName}>
              Недельный Курс по мозаике из стекла
            </h4>
            <div className={cls.wrapperAtribut}>
              <div className={cls.priceContainer}>
                {/* <div className={cls.iconContainer}> */}
                <div className={cls.timeIcon} />
                {/* </div> */}
                <p>3 часа</p>
              </div>
              <div className={cls.priceContainer}>
                {/* <div className={cls.iconContainer}> */}
                <div className={cls.rubleIcon} />
                {/* </div> */}
                <p>4000 рублей</p>
              </div>
            </div>
            <p className={cls.description}>
              Мы делаем рисование доступным с помощью пошаговой программы и
              вовлечённых преподавателей.
            </p>

            <button className={cls.btnWhite} type="button">
              Узнать подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
