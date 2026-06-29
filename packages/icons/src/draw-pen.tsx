import { mdiDrawPen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DrawPen(props: IconComponentProps) {
  return <Icon path={mdiDrawPen} {...props} />;
}

export { mdiDrawPen as path };
