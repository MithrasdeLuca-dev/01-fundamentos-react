import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=40"
      />

      <div className={styles.profile}>
        <strong>Diego Fernandes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar o seu perfil </a>
      </footer>

    </aside>
  );
}
