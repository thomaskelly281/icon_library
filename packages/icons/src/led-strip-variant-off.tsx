import { mdiLedStripVariantOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LedStripVariantOff(props: IconComponentProps) {
  return <Icon path={mdiLedStripVariantOff} {...props} />;
}

export { mdiLedStripVariantOff as path };
