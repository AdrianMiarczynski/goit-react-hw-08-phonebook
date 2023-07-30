import css from './home.module.css';
import imageHome from '../../../images/contact-g6700a1fc0_1280.jpg';
export const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Contacts Comunity</h1>
      <div className={css['image-wrapper']}>
        <img src={imageHome} width="400px" alt="network-people" />
      </div>
    </div>
  );
};

export default Home;
