import { mdiWan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wan(props: IconComponentProps) {
  return <Icon path={mdiWan} {...props} />;
}

export { mdiWan as path };
