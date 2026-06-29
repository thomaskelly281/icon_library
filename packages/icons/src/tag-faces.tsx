import { mdiTagFaces } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagFaces(props: IconComponentProps) {
  return <Icon path={mdiTagFaces} {...props} />;
}

export { mdiTagFaces as path };
