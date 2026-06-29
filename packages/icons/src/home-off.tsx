import { mdiHomeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeOff(props: IconComponentProps) {
  return <Icon path={mdiHomeOff} {...props} />;
}

export { mdiHomeOff as path };
