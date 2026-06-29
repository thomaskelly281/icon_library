import { mdiTextBoxEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxEdit(props: IconComponentProps) {
  return <Icon path={mdiTextBoxEdit} {...props} />;
}

export { mdiTextBoxEdit as path };
