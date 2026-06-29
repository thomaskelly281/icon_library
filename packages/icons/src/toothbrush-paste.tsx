import { mdiToothbrushPaste } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToothbrushPaste(props: IconComponentProps) {
  return <Icon path={mdiToothbrushPaste} {...props} />;
}

export { mdiToothbrushPaste as path };
