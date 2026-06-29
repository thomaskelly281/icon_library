import { mdiEqualBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EqualBox(props: IconComponentProps) {
  return <Icon path={mdiEqualBox} {...props} />;
}

export { mdiEqualBox as path };
