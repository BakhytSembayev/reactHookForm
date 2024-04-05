import { useForm } from 'react-hook-form';
import styles from './App.css';

const sendFormData = (formData) => {
    console.log(formData);
};

export const App = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: '',
        },
    });

    const loginProps = {
        minLength: { value: 3, message: 'Неверный логин. Должно быть не меньше 3 символов' },
        maxLength: { value: 20, message: 'Неверный логин. Должно быть не больше 20 символов' },
        pattern: {
            value: /^[w_]*$/,
            message: 'Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание',
        },
    };

    const loginError = errors.login?.message;

    return (
        <div className={styles.app}>
            <form onSubmit={handleSubmit(sendFormData)}>
                {loginError && <div className={styles.errorLabel}>{loginError}</div>}
                <input name="login" type="text" {...register('login', loginProps)} />
                <button type="submit" disabled={!!loginError}>Отправить</button>
            </form>
        </div>
    );
};

export default App;