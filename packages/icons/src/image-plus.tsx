import { mdiImagePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImagePlus(props: IconComponentProps) {
  return <Icon path={mdiImagePlus} {...props} />;
}

export { mdiImagePlus as path };
