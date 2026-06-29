import { mdiVectorLink } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorLink(props: IconComponentProps) {
  return <Icon path={mdiVectorLink} {...props} />;
}

export { mdiVectorLink as path };
