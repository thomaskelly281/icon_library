import { mdiAccountMusic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountMusic(props: IconComponentProps) {
  return <Icon path={mdiAccountMusic} {...props} />;
}

export { mdiAccountMusic as path };
