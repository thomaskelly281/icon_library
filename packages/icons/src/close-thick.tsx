import { mdiCloseThick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseThick(props: IconComponentProps) {
  return <Icon path={mdiCloseThick} {...props} />;
}

export { mdiCloseThick as path };
