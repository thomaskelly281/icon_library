import { mdiFormTextboxPassword } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormTextboxPassword(props: IconComponentProps) {
  return <Icon path={mdiFormTextboxPassword} {...props} />;
}

export { mdiFormTextboxPassword as path };
