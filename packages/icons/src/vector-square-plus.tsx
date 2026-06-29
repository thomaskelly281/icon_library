import { mdiVectorSquarePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorSquarePlus(props: IconComponentProps) {
  return <Icon path={mdiVectorSquarePlus} {...props} />;
}

export { mdiVectorSquarePlus as path };
