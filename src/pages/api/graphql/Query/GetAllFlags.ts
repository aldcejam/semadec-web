import { gql } from "@apollo/client";
import { client } from "../../../../../client-graphql";

const GetAllFlags = ()=>{
  client
    .query({
      query: gql`
        query {
          flags {
            id
            name
          }
        }
      `,
    })
    .then((result) => console.log(result.data.flags));
}

export default GetAllFlags;