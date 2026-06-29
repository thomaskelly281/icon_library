import { mdiListBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ListBox(props: IconComponentProps) {
  return <Icon path={mdiListBox} {...props} />;
}

export { mdiListBox as path };
