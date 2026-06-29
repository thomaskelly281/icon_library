import { mdiSelectionEllipse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectionEllipse(props: IconComponentProps) {
  return <Icon path={mdiSelectionEllipse} {...props} />;
}

export { mdiSelectionEllipse as path };
