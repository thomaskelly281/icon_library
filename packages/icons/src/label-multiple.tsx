import { mdiLabelMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LabelMultiple(props: IconComponentProps) {
  return <Icon path={mdiLabelMultiple} {...props} />;
}

export { mdiLabelMultiple as path };
