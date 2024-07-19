
import Container from '@mui/material/Container/Container';





import Button from '@mui/material/Button/Button';
import Link from 'next/link';

export default async function BlogPage() {


  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: any[] = await res.json()


  const res2 = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments: any[] = await res2.json()

   



  return (
    <Container maxWidth="sm">
      <div className='my-blog'>
        

        <ul>
          {posts.map((post) => (
            <li key={post.id} className='text-lg italic  mb-5'>{post.title}
              <p className='not-italic font-bold'>{post.body}</p>
              
              <Link className='bg-blue-500 active:bg-blue-600'  href={{
        pathname: "/pageDetails",
        query: { id: post.id },
      }}>View Details</Link>
            </li>

          ))}
        </ul>

        <h2 className='font-bold mt-20'>Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className='text-lg italic  mb-5'>{comment.name}
              <p className='not-italic font-bold'>{comment.email}</p>
              <p className=''>{comment.body}</p>
            </li>

          ))}
        </ul>

      </div>
    </Container>
  );
}
