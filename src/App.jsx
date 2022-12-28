import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>

      <Header />
      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            author="José"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perferendis blanditiis porro facilis nobis commodi. Voluptate aliquid, accusantium ducimus, dolorum, adipisci eveniet necessitatibus quidem ipsa sed ex aspernatur cum incidunt!"
          />
          <Post
            author="Maria"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, sequi nesciunt! Expedita quia rem, doloribus debitis fuga ea similique asperiores animi illum temporibus, fugiat minima distinctio, doloremque at? Quas, quaerat."
          />
          <Post
            author="Rocketseat"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minus assumenda aspernatur, optio cumque distinctio excepturi quo soluta labore debitis tenetur esse? Unde dolores neque sint velit odio quod ipsa."
          />
        </main>
      </div>
    </div>
  )
}

