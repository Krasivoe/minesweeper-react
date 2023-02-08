import styles from './Input.module.scss';

const Input = ({ className, ...props }) => {
  return (
    <input
      className={className ? [styles.input, className].join(' ') : styles.input}
      type="text"
      {...props}
    />
  );
};

export default Input;
