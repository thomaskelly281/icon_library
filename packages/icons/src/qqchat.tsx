import { mdiQqchat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Qqchat(props: IconComponentProps) {
  return <Icon path={mdiQqchat} {...props} />;
}

export { mdiQqchat as path };
