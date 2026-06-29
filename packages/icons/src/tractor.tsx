import { mdiTractor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tractor(props: IconComponentProps) {
  return <Icon path={mdiTractor} {...props} />;
}

export { mdiTractor as path };
