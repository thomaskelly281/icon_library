import { mdiFileWordBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileWordBox(props: IconComponentProps) {
  return <Icon path={mdiFileWordBox} {...props} />;
}

export { mdiFileWordBox as path };
