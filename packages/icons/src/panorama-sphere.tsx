import { mdiPanoramaSphere } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanoramaSphere(props: IconComponentProps) {
  return <Icon path={mdiPanoramaSphere} {...props} />;
}

export { mdiPanoramaSphere as path };
