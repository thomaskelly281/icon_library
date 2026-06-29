import { mdiMicrosoftWord } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftWord(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftWord} {...props} />;
}

export { mdiMicrosoftWord as path };
