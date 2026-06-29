import { mdiFormTextbox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormTextbox(props: IconComponentProps) {
  return <Icon path={mdiFormTextbox} {...props} />;
}

export { mdiFormTextbox as path };
