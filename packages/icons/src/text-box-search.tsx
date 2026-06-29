import { mdiTextBoxSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxSearch(props: IconComponentProps) {
  return <Icon path={mdiTextBoxSearch} {...props} />;
}

export { mdiTextBoxSearch as path };
