import { mdiLedVariantOn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LedVariantOn(props: IconComponentProps) {
  return <Icon path={mdiLedVariantOn} {...props} />;
}

export { mdiLedVariantOn as path };
