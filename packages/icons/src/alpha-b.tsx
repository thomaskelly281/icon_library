import { mdiAlphaB } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaB(props: IconComponentProps) {
  return <Icon path={mdiAlphaB} {...props} />;
}

export { mdiAlphaB as path };
