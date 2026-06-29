import { mdiAlphaHBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaHBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaHBox} {...props} />;
}

export { mdiAlphaHBox as path };
