import { mdiFile } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function File(props: IconComponentProps) {
  return <Icon path={mdiFile} {...props} />;
}

export { mdiFile as path };
