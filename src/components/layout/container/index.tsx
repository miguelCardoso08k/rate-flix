import styles from './container.module.css';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.container}>{children}</main>;
};

export default Container;
