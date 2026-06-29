import { mdiLogin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Login(props: IconComponentProps) {
  return <Icon path={mdiLogin} {...props} />;
}

export { mdiLogin as path };
