import { mdiAlphaVBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaVBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaVBox} {...props} />;
}

export { mdiAlphaVBox as path };
