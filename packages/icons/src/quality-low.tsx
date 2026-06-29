import { mdiQualityLow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function QualityLow(props: IconComponentProps) {
  return <Icon path={mdiQualityLow} {...props} />;
}

export { mdiQualityLow as path };
