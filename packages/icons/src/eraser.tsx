import { mdiEraser } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Eraser(props: IconComponentProps) {
  return <Icon path={mdiEraser} {...props} />;
}

export { mdiEraser as path };
