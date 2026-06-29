import { mdiAlphaWBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaWBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaWBox} {...props} />;
}

export { mdiAlphaWBox as path };
