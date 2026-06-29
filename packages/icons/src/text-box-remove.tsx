import { mdiTextBoxRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxRemove(props: IconComponentProps) {
  return <Icon path={mdiTextBoxRemove} {...props} />;
}

export { mdiTextBoxRemove as path };
