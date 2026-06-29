import { mdiLedVariantOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LedVariantOff(props: IconComponentProps) {
  return <Icon path={mdiLedVariantOff} {...props} />;
}

export { mdiLedVariantOff as path };
