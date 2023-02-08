import styles from './ButtonPrimary.module.scss';

const ButtonPrimary = ({ children, className, ...props }) => {
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

export default ButtonPrimary;
