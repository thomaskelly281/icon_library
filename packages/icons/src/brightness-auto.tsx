import { mdiBrightnessAuto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BrightnessAuto(props: IconComponentProps) {
  return <Icon path={mdiBrightnessAuto} {...props} />;
}

export { mdiBrightnessAuto as path };
