import { mdiHeadset } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Headset(props: IconComponentProps) {
  return <Icon path={mdiHeadset} {...props} />;
}

export { mdiHeadset as path };
