import { mdiVectorSquareMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorSquareMinus(props: IconComponentProps) {
  return <Icon path={mdiVectorSquareMinus} {...props} />;
}

export { mdiVectorSquareMinus as path };
