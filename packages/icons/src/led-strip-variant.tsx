import { mdiLedStripVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LedStripVariant(props: IconComponentProps) {
  return <Icon path={mdiLedStripVariant} {...props} />;
}

export { mdiLedStripVariant as path };
