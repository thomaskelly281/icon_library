import { mdiCardAccountPhone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardAccountPhone(props: IconComponentProps) {
  return <Icon path={mdiCardAccountPhone} {...props} />;
}

export { mdiCardAccountPhone as path };
