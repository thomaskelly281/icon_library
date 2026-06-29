import { mdiVectorUnion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorUnion(props: IconComponentProps) {
  return <Icon path={mdiVectorUnion} {...props} />;
}

export { mdiVectorUnion as path };
