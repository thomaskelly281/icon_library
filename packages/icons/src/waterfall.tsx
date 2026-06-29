import { mdiWaterfall } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Waterfall(props: IconComponentProps) {
  return <Icon path={mdiWaterfall} {...props} />;
}

export { mdiWaterfall as path };
