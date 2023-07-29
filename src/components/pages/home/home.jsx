const styles = {
  container: {
    minHeight: 'calc(100vh-50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeugth: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hello World !!! this is Home page</h1>
    </div>
  );
};

export default Home;
