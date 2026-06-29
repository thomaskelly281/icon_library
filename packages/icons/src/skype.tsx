import { mdiSkype } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Skype(props: IconComponentProps) {
  return <Icon path={mdiSkype} {...props} />;
}

export { mdiSkype as path };
