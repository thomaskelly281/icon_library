import { mdiVectorLine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorLine(props: IconComponentProps) {
  return <Icon path={mdiVectorLine} {...props} />;
}

export { mdiVectorLine as path };
