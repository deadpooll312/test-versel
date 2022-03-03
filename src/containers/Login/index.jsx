import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import Layout from 'components/Layouts/Auth';
import Input from 'components/Input';
import Button from 'components/Button';
import ServerError from 'components/ServerError';

import { signInRequest } from 'store/user/actions';
import { makeSelectSignUpError, makeSelectSignInLoading } from 'store/user/selectors';

const Login = () => {
  const dispatch = useDispatch();
  const fetching = useSelector(makeSelectSignInLoading);
  const errors = useSelector(makeSelectSignUpError);
  const initialValues = { username: '', password: '' };

  const validationSchema = yup.object({
    username: yup.string().email('Неправильный email!').required('Обязательно для заполнения!'),
    password: yup.string().required('Обязательно для заполнения!'),
  });

  const onSignIn = data => {
    dispatch(signInRequest(data));
  };

  return (
    <Layout>
      <div className="card" style={{ width: '25rem' }}>
        <div className="card-body">
          <h4 className="card-title">Войти</h4>

          <Formik initialValues={initialValues} onSubmit={onSignIn} validationSchema={validationSchema}>
            {() => (
              <Form>
                <div className="form-group mb-2">
                  <Input name="username" label="Адрес электронной почты:" />
                </div>

                <div className="form-group mb-2">
                  <Input name="password" label="Пароль:" type="password" />
                </div>

                <Button
                  loading={fetching}
                  type="submit"
                  className="btn-success"
                >
                  Войти
                </Button>
              </Form>
            )}
          </Formik>

          <ServerError error={errors} />

          <div className="mt-3">
            <div>Забыли свой пароль?&nbsp;
              <Link href="/">Сбросьте его.</Link>
            </div>

            <div>Нет учетной записи?&nbsp;
              <Link href="/">Зарегистрироваться.</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
