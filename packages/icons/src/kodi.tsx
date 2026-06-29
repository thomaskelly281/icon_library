import { mdiKodi } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Kodi(props: IconComponentProps) {
  return <Icon path={mdiKodi} {...props} />;
}

export { mdiKodi as path };
