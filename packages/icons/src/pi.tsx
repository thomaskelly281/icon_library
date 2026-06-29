import { mdiPi } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pi(props: IconComponentProps) {
  return <Icon path={mdiPi} {...props} />;
}

export { mdiPi as path };
