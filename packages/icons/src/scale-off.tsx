import { mdiScaleOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScaleOff(props: IconComponentProps) {
  return <Icon path={mdiScaleOff} {...props} />;
}

export { mdiScaleOff as path };
