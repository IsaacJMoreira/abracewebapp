import * as Separator from '@radix-ui/react-separator'
import Logo from '../logo/Logo'
import ABRACE from '../../public/assets/images/ABRACE.png'

const Footer = () => {
  return (
    <div className="Footer_div flex flex-col justify-between items-center z-10">
      <div>quanto custa ter um pet?</div>
      <div>pilítica de adoção</div>
      <div>conheça a ABRACE</div>
      <div>seja voluntário</div>
      <div>seja manesalista</div>
      <div>quero doar</div>
      <Logo
      logoAlt='test'
      logoNI={ABRACE}
      />
      <div>ABRACE adoções ONG. 20.999.333/0001-00</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
  )
}

export default Footer