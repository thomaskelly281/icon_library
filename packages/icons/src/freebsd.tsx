import { mdiFreebsd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Freebsd(props: IconComponentProps) {
  return <Icon path={mdiFreebsd} {...props} />;
}

export { mdiFreebsd as path };
