import { mdiBookArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookArrowUp(props: IconComponentProps) {
  return <Icon path={mdiBookArrowUp} {...props} />;
}

export { mdiBookArrowUp as path };
