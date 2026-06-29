import { mdiImageFilterHdr } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageFilterHdr(props: IconComponentProps) {
  return <Icon path={mdiImageFilterHdr} {...props} />;
}

export { mdiImageFilterHdr as path };
