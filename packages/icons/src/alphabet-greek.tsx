import { mdiAlphabetGreek } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphabetGreek(props: IconComponentProps) {
  return <Icon path={mdiAlphabetGreek} {...props} />;
}

export { mdiAlphabetGreek as path };
