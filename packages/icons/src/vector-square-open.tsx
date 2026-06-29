import { mdiVectorSquareOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorSquareOpen(props: IconComponentProps) {
  return <Icon path={mdiVectorSquareOpen} {...props} />;
}

export { mdiVectorSquareOpen as path };
