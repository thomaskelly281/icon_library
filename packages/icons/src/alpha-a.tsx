import { mdiAlphaA } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaA(props: IconComponentProps) {
  return <Icon path={mdiAlphaA} {...props} />;
}

export { mdiAlphaA as path };
