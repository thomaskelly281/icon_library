import { mdiMouseVariantOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseVariantOff(props: IconComponentProps) {
  return <Icon path={mdiMouseVariantOff} {...props} />;
}

export { mdiMouseVariantOff as path };
