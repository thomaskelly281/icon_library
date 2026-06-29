import { mdiOnepassword } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Onepassword(props: IconComponentProps) {
  return <Icon path={mdiOnepassword} {...props} />;
}

export { mdiOnepassword as path };
