import { mdiFileWord } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileWord(props: IconComponentProps) {
  return <Icon path={mdiFileWord} {...props} />;
}

export { mdiFileWord as path };
