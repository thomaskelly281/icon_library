import { mdiAlphaI } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaI(props: IconComponentProps) {
  return <Icon path={mdiAlphaI} {...props} />;
}

export { mdiAlphaI as path };
