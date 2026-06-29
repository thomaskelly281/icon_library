import { mdiAlphaFBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaFBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaFBox} {...props} />;
}

export { mdiAlphaFBox as path };
