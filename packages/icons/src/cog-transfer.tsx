import { mdiCogTransfer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogTransfer(props: IconComponentProps) {
  return <Icon path={mdiCogTransfer} {...props} />;
}

export { mdiCogTransfer as path };
