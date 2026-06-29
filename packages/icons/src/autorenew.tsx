import { mdiAutorenew } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Autorenew(props: IconComponentProps) {
  return <Icon path={mdiAutorenew} {...props} />;
}

export { mdiAutorenew as path };
