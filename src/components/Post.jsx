import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/mithrasdeLuca-dev.png" />

          <div className={styles.authorInfo}>
            <strong>Mithras de Luca</strong>
            <span>Web Developer Front-End</span>
          </div>
        </div>

        <time title="11 de maio as 8:13" dateTime="2022-05-11 8:13:30">Publicado há 1h </time>
      </header>
      
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="">jane.design/doctorcare</a></p>
        <p>
          <a href=""> #novoprojeto</a>
          <a href="">#nlw </a>
          <a href="">#rocketseat</a>
        </p>
      </div>
    
    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      
      <textarea 
      placeholder='Deixe seu comentário'
      />
     <footer>
     <button type='submit'>Publicar</button> 
     </footer>
      
      </form>

    <div className={styles.comentList}>
    <Comment/>
    <Comment/>
    <Comment/>
    </div>

    </article>
  )
}
