
import Container from '@mui/material/Container/Container';

import { useRouter } from 'next/navigation'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import Image from 'next/image';
import Button from '@mui/material/Button/Button';

export default async function Home() {


  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: any[] = await res.json()


  const res2 = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments: any[] = await res2.json()





  return (
    <Container maxWidth="sm">
      <div className='my-blog'>
        <h1 className='font-bold my-16 text-3xl'>My Blog</h1>
        <h2 className='font-bold text-3xl mb-10'>Post</h2>

        <ul>
          {posts.map((post) => (
            <li className='text-lg italic  mb-5'>{post.title}
              <p className='not-italic font-bold'>{post.body}</p>
              <Button className='mt-5' variant="contained" href="#contained-buttons">
                see Details
              </Button>
            </li>

          ))}
        </ul>

        <h2 className='font-bold mt-20'>Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li className='text-lg italic  mb-5'>{comment.name}
              <p className='not-italic font-bold'>{comment.email}</p>
              <p className=''>{comment.body}</p>
            </li>

          ))}
        </ul>

      </div>
    </Container>
  );
}
