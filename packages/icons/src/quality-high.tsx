import { mdiQualityHigh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function QualityHigh(props: IconComponentProps) {
  return <Icon path={mdiQualityHigh} {...props} />;
}

export { mdiQualityHigh as path };
