import { mdiSnapchat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Snapchat(props: IconComponentProps) {
  return <Icon path={mdiSnapchat} {...props} />;
}

export { mdiSnapchat as path };
