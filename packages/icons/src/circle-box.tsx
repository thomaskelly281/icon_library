import { mdiCircleBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleBox(props: IconComponentProps) {
  return <Icon path={mdiCircleBox} {...props} />;
}

export { mdiCircleBox as path };
