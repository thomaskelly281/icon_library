import { mdiFormTextboxLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormTextboxLock(props: IconComponentProps) {
  return <Icon path={mdiFormTextboxLock} {...props} />;
}

export { mdiFormTextboxLock as path };
