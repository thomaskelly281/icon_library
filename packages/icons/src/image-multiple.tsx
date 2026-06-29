import { mdiImageMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageMultiple(props: IconComponentProps) {
  return <Icon path={mdiImageMultiple} {...props} />;
}

export { mdiImageMultiple as path };
