import { mdiAlphaLBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaLBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaLBox} {...props} />;
}

export { mdiAlphaLBox as path };
