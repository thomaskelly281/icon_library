import { mdiImageArea } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageArea(props: IconComponentProps) {
  return <Icon path={mdiImageArea} {...props} />;
}

export { mdiImageArea as path };
