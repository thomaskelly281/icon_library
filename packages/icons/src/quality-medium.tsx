import { mdiQualityMedium } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function QualityMedium(props: IconComponentProps) {
  return <Icon path={mdiQualityMedium} {...props} />;
}

export { mdiQualityMedium as path };
