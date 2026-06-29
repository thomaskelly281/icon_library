import { mdiToggleSwitchVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToggleSwitchVariant(props: IconComponentProps) {
  return <Icon path={mdiToggleSwitchVariant} {...props} />;
}

export { mdiToggleSwitchVariant as path };
