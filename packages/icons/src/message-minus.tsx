import { mdiMessageMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageMinus(props: IconComponentProps) {
  return <Icon path={mdiMessageMinus} {...props} />;
}

export { mdiMessageMinus as path };
