import Container from "@mui/material/Container/Container";
import { useRouter } from "next/router";

export default async function PageDetails() {

    

    const router = useRouter();
    const {id} = router.query;

    const specificResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const postDetails = await specificResponse.json()
    return (
        <Container maxWidth="sm">
         <div>
            
         </div>
        </Container>
      );
}