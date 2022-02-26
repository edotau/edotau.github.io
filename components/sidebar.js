import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/resume">
        <a>Experience</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/software">
        <a>Software</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </nav>
  )
}
