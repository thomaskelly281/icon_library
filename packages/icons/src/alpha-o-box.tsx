import { mdiAlphaOBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaOBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaOBox} {...props} />;
}

export { mdiAlphaOBox as path };
