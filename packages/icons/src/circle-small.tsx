import { mdiCircleSmall } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleSmall(props: IconComponentProps) {
  return <Icon path={mdiCircleSmall} {...props} />;
}

export { mdiCircleSmall as path };
