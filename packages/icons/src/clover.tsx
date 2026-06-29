import { mdiClover } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Clover(props: IconComponentProps) {
  return <Icon path={mdiClover} {...props} />;
}

export { mdiClover as path };
