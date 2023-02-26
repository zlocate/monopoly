import React, { ChangeEvent, useState } from 'react';
import style from './authForm.module.scss';
import classNames from 'classnames';
import { Button, ButtonVariation } from '../button/button';
import { Link } from 'react-router-dom';
import { getInputName } from '../../utils/helpers';

export interface IAuthFormProps {
  submitBtnName: string;
  children: JSX.Element | JSX.Element[];
  title: string;
  isDarkTheme?: boolean;
  linkTitle?: string;
  linkName?: string;
  linkPath?: string;
  linkAction: React.MouseEventHandler<HTMLAnchorElement>;
  formAction: React.FormEventHandler<HTMLFormElement>;
}

export const AuthForm = (props: IAuthFormProps) => {
  const {
    isDarkTheme,
    submitBtnName,
    title,
    formAction,
    children,
    linkPath,
    linkTitle,
    linkName,
  } = props;
  const [inputValues, setInputValues] = useState({} as Record<string, string>);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputValues(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      const name = getInputName(child);
      const value = name ? inputValues[name] : '';
      return React.cloneElement(child as React.ReactElement, {
        className: style.input,
        isDarkTheme,
        onChange: inputChangeHandler,
        value: value ? value : '',
      });
    }
    return child;
  });

  return (
    <div className={classNames(style.container, isDarkTheme && style.dark)}>
      <h2 className={classNames(style.title, isDarkTheme && style.dark)}>
        {title}
      </h2>
      <form className={style.form} onSubmit={formAction}>
        {childrenWithProps}
        <Button
          type="submit"
          variation={ButtonVariation.PRIMARY}
          className={style.button}>
          {submitBtnName}
        </Button>
      </form>
      {linkPath && (
        <>
          <p className={style.linkTitle}>{linkTitle}</p>
          <Link
            to={linkPath}
            className={classNames(style.link, isDarkTheme && style.dark)}>
            {linkName}
          </Link>
        </>
      )}
    </div>
  );
};
