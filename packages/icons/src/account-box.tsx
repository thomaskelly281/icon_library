import { mdiAccountBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountBox(props: IconComponentProps) {
  return <Icon path={mdiAccountBox} {...props} />;
}

export { mdiAccountBox as path };
