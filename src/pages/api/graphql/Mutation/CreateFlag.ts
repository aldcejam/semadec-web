import { gql } from "@apollo/client";
import { client } from "../../../../../client-graphql";

const CreateFlag = (FlagName: string) => {

  client
    .mutate({
      mutation: gql`
        mutation {
          createFlag(name: "${FlagName}") {	
            name: name
          }
        }
      `,
    })
    .then((result) => console.log(result.data.flags));
};

export default CreateFlag;
