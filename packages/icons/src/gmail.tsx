import { mdiGmail } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gmail(props: IconComponentProps) {
  return <Icon path={mdiGmail} {...props} />;
}

export { mdiGmail as path };
