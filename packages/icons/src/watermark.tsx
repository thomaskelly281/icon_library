import { mdiWatermark } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Watermark(props: IconComponentProps) {
  return <Icon path={mdiWatermark} {...props} />;
}

export { mdiWatermark as path };
