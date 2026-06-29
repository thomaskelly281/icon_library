import { mdiBrightnessPercent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BrightnessPercent(props: IconComponentProps) {
  return <Icon path={mdiBrightnessPercent} {...props} />;
}

export { mdiBrightnessPercent as path };
