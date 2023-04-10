import Link from 'next/link'
import { client } from '../libs/client'
import styles from "../styles/Home.module.scss";
import Image from 'next/image';


//SSG
export const getStaticProps =async() => {
  const data =await client.get({endpoint:"blog"})
  return{
    props:{
      blog:data.contents,
    },
  }
}

export default function Home({blog}) {
  return (
    <div className={styles.container}>
    <div>
    <Image src="/img/FYA32xmVsAAXyIZ.png" alt="My image" width={640} height={426} />
</div>
      {blog.map((blog) => (
        <li key={blog.id} >
          <Link Link legacyBehavior href={`blog/${blog.id}`}>
            <a href="">{blog.title}</a>
          </Link>
        </li>
      ))}
    </div>
  )
}