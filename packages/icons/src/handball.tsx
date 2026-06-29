import { mdiHandball } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Handball(props: IconComponentProps) {
  return <Icon path={mdiHandball} {...props} />;
}

export { mdiHandball as path };
