import css from './home.module.css';
import imageHome from '../../../images/contacts-comunity.jpg';
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
