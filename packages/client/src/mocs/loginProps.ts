import { ILoginForm } from '../pages/login/login';

const LoginProps: ILoginForm = {
  headerName: 'Вход в игру',
  linkTitle: 'создать аккаунт',
  linkAction: () => { console.log('router to login page') },
  formAction: () => { console.log('router to submit form') },
  submitBtnName: 'Войти',
  inputsProps: [
    {
      fieldId: 'login',
      fieldName: 'Логин',
      inputType: 'text',
    },
    {
      fieldId: 'password',
      fieldName: 'Пароль',
      inputType: 'password',
    },
  ],
};

export default LoginProps;
