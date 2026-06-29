import { mdiDiamond } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Diamond(props: IconComponentProps) {
  return <Icon path={mdiDiamond} {...props} />;
}

export { mdiDiamond as path };
