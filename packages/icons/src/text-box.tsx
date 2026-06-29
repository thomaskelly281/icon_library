import { mdiTextBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBox(props: IconComponentProps) {
  return <Icon path={mdiTextBox} {...props} />;
}

export { mdiTextBox as path };
