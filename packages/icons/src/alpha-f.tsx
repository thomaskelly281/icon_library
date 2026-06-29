import { mdiAlphaF } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaF(props: IconComponentProps) {
  return <Icon path={mdiAlphaF} {...props} />;
}

export { mdiAlphaF as path };
