import { mdiLabelPercent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LabelPercent(props: IconComponentProps) {
  return <Icon path={mdiLabelPercent} {...props} />;
}

export { mdiLabelPercent as path };
