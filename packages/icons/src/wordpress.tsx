import { mdiWordpress } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wordpress(props: IconComponentProps) {
  return <Icon path={mdiWordpress} {...props} />;
}

export { mdiWordpress as path };
