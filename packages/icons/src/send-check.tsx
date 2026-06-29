import { mdiSendCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SendCheck(props: IconComponentProps) {
  return <Icon path={mdiSendCheck} {...props} />;
}

export { mdiSendCheck as path };
