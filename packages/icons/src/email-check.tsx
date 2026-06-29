import { mdiEmailCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailCheck(props: IconComponentProps) {
  return <Icon path={mdiEmailCheck} {...props} />;
}

export { mdiEmailCheck as path };
