import { mdiPyramidOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PyramidOff(props: IconComponentProps) {
  return <Icon path={mdiPyramidOff} {...props} />;
}

export { mdiPyramidOff as path };
