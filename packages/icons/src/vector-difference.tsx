import { mdiVectorDifference } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorDifference(props: IconComponentProps) {
  return <Icon path={mdiVectorDifference} {...props} />;
}

export { mdiVectorDifference as path };
