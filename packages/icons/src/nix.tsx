import { mdiNix } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Nix(props: IconComponentProps) {
  return <Icon path={mdiNix} {...props} />;
}

export { mdiNix as path };
