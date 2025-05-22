import { useNavigate } from 'react-router-dom';

import LogoNormal from '../../assets/fanation-ico-normal.svg';
import LogoSeuBone from '../../assets/logo-seubone.svg';

import Header from '../../components/header/header.module';

import styles from './login.module.css';

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault(); // Previne o reload da página
    // Aqui você poderia validar email/senha se quiser
    navigate('/home'); // Redireciona para a rota /home
  }

  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <div className={styles.card}>
          <img src={LogoNormal} alt="Fanation logo" />

          <h1 className={styles.title}>Bem-vindo ao Fanation</h1>
          <p className={styles.subtitle}>Acesse a sua conta para iniciar</p>

           <form onSubmit={handleLogin}>
            <label htmlFor="email" className={styles.label}>
              Inserir e-mail
            </label>
            <input
              id="email"
              type="email" 
              placeholder="Digite seu e-mail"
              className={styles.input}/>

            <label htmlFor="password" className={styles.label}>
              Inserir senha
            </label>
            <input
              id="password"
              type="password" 
              placeholder="Digite sua senha"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Acessar
            </button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Desenvolvido pela <img src={LogoSeuBone} alt="Logo SeuBone" /></p>
      </footer>
    </div>
  );
}
