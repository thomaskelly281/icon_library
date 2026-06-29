import { mdiCircleOpacity } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleOpacity(props: IconComponentProps) {
  return <Icon path={mdiCircleOpacity} {...props} />;
}

export { mdiCircleOpacity as path };
