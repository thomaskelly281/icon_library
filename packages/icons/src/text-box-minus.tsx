import { mdiTextBoxMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxMinus(props: IconComponentProps) {
  return <Icon path={mdiTextBoxMinus} {...props} />;
}

export { mdiTextBoxMinus as path };
