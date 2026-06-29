import { mdiTextBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiTextBoxMultiple} {...props} />;
}

export { mdiTextBoxMultiple as path };
