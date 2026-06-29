import { mdiAlphaC } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaC(props: IconComponentProps) {
  return <Icon path={mdiAlphaC} {...props} />;
}

export { mdiAlphaC as path };
