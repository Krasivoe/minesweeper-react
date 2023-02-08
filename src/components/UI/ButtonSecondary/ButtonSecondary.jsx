import styles from './ButtonSecondary.module.scss';

const ButtonSecondary = ({ children, className, ...props }) => {
  return (
    <button
      className={
        className
          ? ['button', styles.button, className].join(' ')
          : ['button', styles.button].join(' ')
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
