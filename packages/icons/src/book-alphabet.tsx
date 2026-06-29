import { mdiBookAlphabet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookAlphabet(props: IconComponentProps) {
  return <Icon path={mdiBookAlphabet} {...props} />;
}

export { mdiBookAlphabet as path };
