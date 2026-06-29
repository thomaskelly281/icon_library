import { mdiControllerClassic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ControllerClassic(props: IconComponentProps) {
  return <Icon path={mdiControllerClassic} {...props} />;
}

export { mdiControllerClassic as path };
