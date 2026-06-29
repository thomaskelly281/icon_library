import { mdiFormSelect } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormSelect(props: IconComponentProps) {
  return <Icon path={mdiFormSelect} {...props} />;
}

export { mdiFormSelect as path };
