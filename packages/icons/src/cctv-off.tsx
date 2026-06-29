import { mdiCctvOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CctvOff(props: IconComponentProps) {
  return <Icon path={mdiCctvOff} {...props} />;
}

export { mdiCctvOff as path };
