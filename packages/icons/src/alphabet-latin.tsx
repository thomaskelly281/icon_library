import { mdiAlphabetLatin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphabetLatin(props: IconComponentProps) {
  return <Icon path={mdiAlphabetLatin} {...props} />;
}

export { mdiAlphabetLatin as path };
