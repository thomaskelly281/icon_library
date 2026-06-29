import { mdiAwning } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Awning(props: IconComponentProps) {
  return <Icon path={mdiAwning} {...props} />;
}

export { mdiAwning as path };
