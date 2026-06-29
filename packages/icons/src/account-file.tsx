import { mdiAccountFile } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountFile(props: IconComponentProps) {
  return <Icon path={mdiAccountFile} {...props} />;
}

export { mdiAccountFile as path };
