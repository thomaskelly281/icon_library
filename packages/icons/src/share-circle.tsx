import { mdiShareCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShareCircle(props: IconComponentProps) {
  return <Icon path={mdiShareCircle} {...props} />;
}

export { mdiShareCircle as path };
