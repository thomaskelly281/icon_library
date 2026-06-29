import { mdiBlurOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BlurOff(props: IconComponentProps) {
  return <Icon path={mdiBlurOff} {...props} />;
}

export { mdiBlurOff as path };
