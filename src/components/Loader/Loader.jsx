import { ThreeCircles } from 'react-loader-spinner';
import style from './Loader.module.css'

const Loader = () => {
  return (
    <div className={style.loader}>
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#581845"
        innerCircleColor="#C70039"
        middleCircleColor="#FF5733"
      />
    </div>
  );
};
export default Loader;
