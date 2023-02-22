import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { links } from '../../utils/const';
import { Logo } from '../../icons/logo';
import style from './footer.module.scss';

export interface IFooterProps {
  navTitle: string;
  navLinks: { path: string; title: string }[];
  infoText: string[];
  isAuthorized: boolean;
  isDarkTheme: boolean;
}

const isLoginLinksAndAuthorized = (title: string, isAuthorized: boolean) => {
  return (
    isAuthorized &&
    (title === links.login.title || title === links.signup.title)
  );
};

export const Footer = (props: IFooterProps) => {
  const { navLinks, navTitle, isAuthorized, infoText, isDarkTheme } = props;

  return (
    <footer className={classNames(style.footer, isDarkTheme && style.dark)}>
      <div className={classNames(style.menu, isDarkTheme && style.dark)}>
        <h4 className={style.title}>{navTitle}</h4>
        <nav>
          <ul className={style.navList}>
            {navLinks.map(({ path, title }) => {
              if (!isLoginLinksAndAuthorized(title, isAuthorized)) {
                return (
                  <li key={path}>
                    <Link to={path} className={style.link}>
                      {title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </div>
      <div className={style.infoContainer}>
      <Logo className={style.logo} />
        {infoText.map((text, index) => (
          <p key={index} className={style.info}>
            {text}
          </p>
        ))}
      </div>
    </footer>
  );
};
