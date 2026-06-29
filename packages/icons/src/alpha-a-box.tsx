import { mdiAlphaABox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaABox(props: IconComponentProps) {
  return <Icon path={mdiAlphaABox} {...props} />;
}

export { mdiAlphaABox as path };
