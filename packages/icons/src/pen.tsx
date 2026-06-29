import { mdiPen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pen(props: IconComponentProps) {
  return <Icon path={mdiPen} {...props} />;
}

export { mdiPen as path };
