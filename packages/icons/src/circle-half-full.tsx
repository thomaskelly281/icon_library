import { mdiCircleHalfFull } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleHalfFull(props: IconComponentProps) {
  return <Icon path={mdiCircleHalfFull} {...props} />;
}

export { mdiCircleHalfFull as path };
