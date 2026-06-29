import { mdiCornOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CornOff(props: IconComponentProps) {
  return <Icon path={mdiCornOff} {...props} />;
}

export { mdiCornOff as path };
