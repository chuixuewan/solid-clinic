import { Fragment, FunctionComponent, useEffect, useState } from "react";
import { MakePost } from "./MakePost";
import { Post } from "./Post";
import { useLdo, useResource, useSolidAuth } from "@ldo/solid-react";
import { ContainerUri, Container, AccessModeList, GetWacRuleSuccess} from "@ldo/solid";

function getStringBeforeProfile(input: string): string {
  const keyword = "profile";
  const index = input.indexOf(keyword);

  if (index !== -1) {
      return input.substring(0, index);
  }

  // If "profile" is not found, return the original string (or handle as needed)
  return input;
}

export const Blog: FunctionComponent = () => {
  const { session } = useSolidAuth();
  const { getResource } = useLdo();
  const [mainContainerUri, setMainContainerUri] = useState<ContainerUri | undefined>();
  const [agent, setAgent] = useState<string>(session.webId as string);
  const [newPodUri, setNewPodUri] = useState<string>(session.webId as string);
 
  useEffect(() => {
  
    if (session.webId) {
      // Get the WebId resource
      const webIdResource = getResource(session.webId);
      
      // Get the root container associated with that WebId
      webIdResource.getRootContainer().then((rootContainerResult) => {
        // Check if there is an error
        if (rootContainerResult.isError) return;
        // Get a child of the root resource called "my-solid-app/"
        const mainContainer = rootContainerResult.child("my-post3-app/");
        

        setMainContainerUri(mainContainer.uri);

        // Create the main container if it doesn't exist yet
        mainContainer.createIfAbsent();
       
        
      });
    }
  }, [getResource, session.webId]);

  const MainContainer = useResource(mainContainerUri);


  // Async function to handle "Change Pod" button
  const handleChangePod = async () => {
    if (newPodUri) {
       const targetContainer = getStringBeforeProfile(newPodUri);

       setMainContainerUri((targetContainer+"my-post3-app/") as ContainerUri);
      
       

      
    }
    else {console.log("pleaese input webid")}
  };

  // Async function to handle "Add Agent" button
  const handleAddAgent = async () => {
    console.log("Add Agent button clicked");
    if (MainContainer && agent) {
      console.log("MainContainer and agent are valid", MainContainer, agent);
  
      try {
        // Fetch the current ACL
        const wacRulesResult  = await MainContainer.getWac();
  
        if (!wacRulesResult.isError) {
          const wacRules  = (wacRulesResult as GetWacRuleSuccess).wacRule;
  
          // Create a new agent access mode list
          const newAgentAccess: AccessModeList = {
            read: true,
            write: true,
            append: true,
            control: true,
          };

          
  
          // Check if the agent already exists in the ACL
          if (!wacRules.agent[agent]) {
            // Append the new agent to the current ACL
            wacRules.agent[agent] = newAgentAccess;
            wacRules.authenticated = {
              read: true,
              write: true,
              append: true,
              control: false,
            };
            wacRules.public = {
              read: true,
            write: false,
            append: false,
            control: false,
            }
          } 
  
          // Update the ACL on the server
          const result = await MainContainer.setWac(wacRules);
  
          console.log("ACL result:", result);
        } else {
          console.error("Failed to get current ACL:", wacRulesResult.message);
        }
      } catch (error) {
        console.error("Failed to update ACL:", error);
      }
    } else {
      console.log("MainContainer or agent is invalid", MainContainer, agent);
    }
  };
  
  

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddAgent();
        }}
      >
        <label>
          Agent WebID to add to ACL:
          <input
            type="text"
            value={agent}
            onChange={(e) => setAgent(e.target.value)}
          />
        </label>
        <button type="submit">Add Agent</button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        
          handleChangePod();
        }}
      >
        <label>
          URI of the Pod to view:
          <input
            type="text"
            value={newPodUri}
            onChange={(e) => setNewPodUri(e.target.value)}
          />
        </label>
        <button type="submit">Change Pod</button>
      </form>
      <MakePost mainContainer={MainContainer} />
      <hr />
      {MainContainer
        // Get all the children of the main container
        ?.children()
        // Filter out children that aren't containers themselves
        .filter((child): child is Container => child.type === "container")
        // Render a "Post" for each child
        .map((child) => (
          <Fragment key={child.uri}>
            <Post key={child.uri} postUri={child.uri} />
            <hr />
          </Fragment>
        ))}
    </main>
  );
};
