import Lottie from 'react-lottie-player'

import lottieJson from '../../public/animation_llaidurc.json'

const Animation = () => {
  return <Lottie loop animationData={lottieJson} play />
}
export default Animation