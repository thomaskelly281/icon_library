import { mdiAlphaZBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaZBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaZBox} {...props} />;
}

export { mdiAlphaZBox as path };
