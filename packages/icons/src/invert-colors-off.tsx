import { mdiInvertColorsOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvertColorsOff(props: IconComponentProps) {
  return <Icon path={mdiInvertColorsOff} {...props} />;
}

export { mdiInvertColorsOff as path };
