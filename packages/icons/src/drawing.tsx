import { mdiDrawing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Drawing(props: IconComponentProps) {
  return <Icon path={mdiDrawing} {...props} />;
}

export { mdiDrawing as path };
