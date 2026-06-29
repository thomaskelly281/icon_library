import { mdiDrawingBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DrawingBox(props: IconComponentProps) {
  return <Icon path={mdiDrawingBox} {...props} />;
}

export { mdiDrawingBox as path };
