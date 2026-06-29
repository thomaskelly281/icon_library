import { mdiVectorSelection } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorSelection(props: IconComponentProps) {
  return <Icon path={mdiVectorSelection} {...props} />;
}

export { mdiVectorSelection as path };
