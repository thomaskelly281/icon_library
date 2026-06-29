import { mdiController } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Controller(props: IconComponentProps) {
  return <Icon path={mdiController} {...props} />;
}

export { mdiController as path };
