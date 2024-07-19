import Container from "@mui/material/Container/Container";
import { useRouter } from "next/router";

export default async function PageDetails() {

    

    const router = useRouter();
    const {id} = router.query;

    const specificResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const postDetails :any[] = await specificResponse.json()
    return (
        <Container maxWidth="sm">
         <div className="w-6/12">
          <p></p>  

          <ul>
            {postDetails.map((post)=>(
              <li>
                
                <p>{post.email}</p>
                <p>{post.userId}</p>
                <p>{post.name}</p>
                </li>
              
            ))}
          </ul>
         </div>
        </Container>
      );
}