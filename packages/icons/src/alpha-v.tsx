import { mdiAlphaV } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaV(props: IconComponentProps) {
  return <Icon path={mdiAlphaV} {...props} />;
}

export { mdiAlphaV as path };
