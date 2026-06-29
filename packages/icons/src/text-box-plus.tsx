import { mdiTextBoxPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxPlus(props: IconComponentProps) {
  return <Icon path={mdiTextBoxPlus} {...props} />;
}

export { mdiTextBoxPlus as path };
