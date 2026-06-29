import { mdiVectorPointSelect } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorPointSelect(props: IconComponentProps) {
  return <Icon path={mdiVectorPointSelect} {...props} />;
}

export { mdiVectorPointSelect as path };
