import { mdiAlphaSBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaSBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaSBox} {...props} />;
}

export { mdiAlphaSBox as path };
