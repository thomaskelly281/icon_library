import { mdiVectorSquareClose } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorSquareClose(props: IconComponentProps) {
  return <Icon path={mdiVectorSquareClose} {...props} />;
}

export { mdiVectorSquareClose as path };
