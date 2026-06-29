import { mdiAlphabeticalOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphabeticalOff(props: IconComponentProps) {
  return <Icon path={mdiAlphabeticalOff} {...props} />;
}

export { mdiAlphabeticalOff as path };
