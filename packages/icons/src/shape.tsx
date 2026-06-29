import { mdiShape } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Shape(props: IconComponentProps) {
  return <Icon path={mdiShape} {...props} />;
}

export { mdiShape as path };
