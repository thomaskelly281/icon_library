import { mdiAccessPointMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccessPointMinus(props: IconComponentProps) {
  return <Icon path={mdiAccessPointMinus} {...props} />;
}

export { mdiAccessPointMinus as path };
