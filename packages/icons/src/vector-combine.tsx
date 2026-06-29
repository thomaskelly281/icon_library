import { mdiVectorCombine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorCombine(props: IconComponentProps) {
  return <Icon path={mdiVectorCombine} {...props} />;
}

export { mdiVectorCombine as path };
