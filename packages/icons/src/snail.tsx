import { mdiSnail } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Snail(props: IconComponentProps) {
  return <Icon path={mdiSnail} {...props} />;
}

export { mdiSnail as path };
