import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from "./Auth";


export const Header = () => {
  return (
    <header>
      <Layout>
        <Logo/>
        <h1>заголовок</h1>
        <Search/>
        <Auth/>
      </Layout>
    </header>
  )
}