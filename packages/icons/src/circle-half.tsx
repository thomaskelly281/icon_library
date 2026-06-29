import { mdiCircleHalf } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleHalf(props: IconComponentProps) {
  return <Icon path={mdiCircleHalf} {...props} />;
}

export { mdiCircleHalf as path };
