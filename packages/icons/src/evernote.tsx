import { mdiEvernote } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Evernote(props: IconComponentProps) {
  return <Icon path={mdiEvernote} {...props} />;
}

export { mdiEvernote as path };
