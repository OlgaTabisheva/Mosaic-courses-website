import image from '../../images/remained-question__image.png';
import cls from './RemainedQuestion.module.scss';

export const RemainedQuestion = ({ setIsOpen }) => {
  return (
    <section className={cls.section}>
      <div className={cls.container}>
        <div className={cls.wrapper}>
          <h2 className={cls.title}>
            Остались вопросы?
            <span> Перезвоним и поможем</span>
          </h2>
          <p className={cls.description}>
            Если вы не уверены в выборе занятия, наш менеджер поможет вам
            определиться, исходя из вашего уровня подготовки и пожеланий.
          </p>
          <div className={cls.btnWrapper}>
            <button onClick={() => setIsOpen(true)} className={cls.btn} type="button">
              Заказать обратный звонок
            </button>
            <div className={cls.btnBorder} />
          </div>
        </div>
        <div className={cls.imgWrapper}>
          <img className={cls.image} src={image} alt="Мозаика" />
          <div className={cls.imageBorder} />
        </div>
      </div>
    </section>
  );
};
