import { mdiStairsUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StairsUp(props: IconComponentProps) {
  return <Icon path={mdiStairsUp} {...props} />;
}

export { mdiStairsUp as path };
