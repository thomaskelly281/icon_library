import { mdiMail } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Mail(props: IconComponentProps) {
  return <Icon path={mdiMail} {...props} />;
}

export { mdiMail as path };
