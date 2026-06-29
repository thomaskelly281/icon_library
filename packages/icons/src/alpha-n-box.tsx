import { mdiAlphaNBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaNBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaNBox} {...props} />;
}

export { mdiAlphaNBox as path };
