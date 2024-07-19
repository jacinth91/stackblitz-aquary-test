
import Container from '@mui/material/Container/Container';
import Link from 'next/link';



export default async function Home() {


  return (
    <Container maxWidth="sm">
      <div className='my-blog'>
        <h1 className='font-bold my-16 text-3xl'>My Blog</h1>
        <h2 className='font-bold text-3xl mb-10'>Post</h2>
        <Link href="/abc">
        My Blog Page
      </Link>
      
       
      </div>
    </Container>
  );
}
