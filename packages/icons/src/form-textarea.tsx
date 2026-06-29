import { mdiFormTextarea } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormTextarea(props: IconComponentProps) {
  return <Icon path={mdiFormTextarea} {...props} />;
}

export { mdiFormTextarea as path };
