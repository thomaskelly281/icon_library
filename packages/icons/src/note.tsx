import { mdiNote } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Note(props: IconComponentProps) {
  return <Icon path={mdiNote} {...props} />;
}

export { mdiNote as path };
