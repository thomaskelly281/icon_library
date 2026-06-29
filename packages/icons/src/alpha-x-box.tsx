import { mdiAlphaXBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaXBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaXBox} {...props} />;
}

export { mdiAlphaXBox as path };
