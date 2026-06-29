import { mdiLabelVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LabelVariant(props: IconComponentProps) {
  return <Icon path={mdiLabelVariant} {...props} />;
}

export { mdiLabelVariant as path };
