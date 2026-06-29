import { mdiFacebook } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Facebook(props: IconComponentProps) {
  return <Icon path={mdiFacebook} {...props} />;
}

export { mdiFacebook as path };
