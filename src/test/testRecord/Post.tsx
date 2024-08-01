import { FunctionComponent, useCallback, useMemo } from "react";
import { ContainerUri, LeafUri } from "@ldo/solid";
import { useLdo, useResource, useSubject } from "@ldo/solid-react";
import { PatientShapeType } from "../../.ldo/fhir.shapeTypes";

export const Post: FunctionComponent<{ postUri: ContainerUri }> = ({
  postUri,
}) => {
  const postIndexUri = `${postUri}index.ttl`;
  console.log(postIndexUri);
  const postResource = useResource(postIndexUri);
  const patient = useSubject(PatientShapeType, postIndexUri);
  const { getResource } = useLdo();
  const imageResource = useResource(
    patient?.PatientPhoto?.["@id"] as LeafUri | undefined
  );

  // Convert the blob into a URL to be used in the img tag
  const blobUrl = useMemo(() => {
    if (imageResource && imageResource.isBinary()) {
      return URL.createObjectURL(imageResource.getBlob()!);
    }
    return undefined;
  }, [imageResource]);

  const deletePost = useCallback(async () => {
    const postContainer = getResource(postUri);
    await postContainer.delete();
  }, [postUri, getResource]);

  if (postResource.status.isError) {
    return <p>postResource.status.message</p>;
  }

  return (
    <div>
      <p>{patient.PatientName}</p>
      {blobUrl && (
        <img src={blobUrl} style={{ height: 300 }} />
      )}
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
};