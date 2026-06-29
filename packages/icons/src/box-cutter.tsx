import { mdiBoxCutter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BoxCutter(props: IconComponentProps) {
  return <Icon path={mdiBoxCutter} {...props} />;
}

export { mdiBoxCutter as path };
