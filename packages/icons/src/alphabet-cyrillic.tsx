import { mdiAlphabetCyrillic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphabetCyrillic(props: IconComponentProps) {
  return <Icon path={mdiAlphabetCyrillic} {...props} />;
}

export { mdiAlphabetCyrillic as path };
