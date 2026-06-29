import { mdiTextBoxCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxCheck(props: IconComponentProps) {
  return <Icon path={mdiTextBoxCheck} {...props} />;
}

export { mdiTextBoxCheck as path };
