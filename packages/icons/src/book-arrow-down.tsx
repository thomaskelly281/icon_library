import { mdiBookArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookArrowDown(props: IconComponentProps) {
  return <Icon path={mdiBookArrowDown} {...props} />;
}

export { mdiBookArrowDown as path };
