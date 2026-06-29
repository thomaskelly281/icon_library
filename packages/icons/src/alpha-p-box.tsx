import { mdiAlphaPBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaPBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaPBox} {...props} />;
}

export { mdiAlphaPBox as path };
