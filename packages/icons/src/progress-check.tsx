import { mdiProgressCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressCheck(props: IconComponentProps) {
  return <Icon path={mdiProgressCheck} {...props} />;
}

export { mdiProgressCheck as path };
