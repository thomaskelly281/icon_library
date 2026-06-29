import { mdiToggleSwitchVariantOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToggleSwitchVariantOff(props: IconComponentProps) {
  return <Icon path={mdiToggleSwitchVariantOff} {...props} />;
}

export { mdiToggleSwitchVariantOff as path };
