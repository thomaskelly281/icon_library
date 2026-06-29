import { mdiAlphabetPiqad } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphabetPiqad(props: IconComponentProps) {
  return <Icon path={mdiAlphabetPiqad} {...props} />;
}

export { mdiAlphabetPiqad as path };
