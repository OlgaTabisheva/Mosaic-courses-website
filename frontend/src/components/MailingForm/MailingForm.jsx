import cls from './MailingForm.module.scss';
import useFormValidation from '../../hooks/useFormValidation';

export const MailingForm = () => {
  const {
    errors, isValid, handleChange, resetForm, values,
  } = useFormValidation();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: values.email,
    };

    if (values.email !== '' || !errors) {
      await fetch('http://127.0.0.1/api/v1/email_form/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(() => {
        resetForm();
      });
    }
  };

  return (
    <div className={cls.formWrapper}>
      <h4 className={cls.formTitle}>
        Будь в курсе новостей студии и получи скидку 10% на первое зянятие
      </h4>
      <form onSubmit={handleSubmit} className={cls.form} noValidate>
        <div className={cls.label}>
          <input
            value={values.email || ''}
            onChange={handleChange}
            className={cls.input}
            type="email"
            name="email"
            placeholder="E-MAIL"
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$"
          />
          <span>
            {errors.email
              ? 'Введите корректный email'
              : ''}
          </span>
        </div>
        <div className={cls.btnWrapper}>
          <button className={cls.submit} type="submit" disabled={!isValid}>
            Подписаться на рассылку
          </button>
          <div className={cls.btnBorder} />
        </div>
      </form>
    </div>
  );
};
