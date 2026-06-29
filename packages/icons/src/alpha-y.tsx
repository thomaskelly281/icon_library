import { mdiAlphaY } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaY(props: IconComponentProps) {
  return <Icon path={mdiAlphaY} {...props} />;
}

export { mdiAlphaY as path };
