import { mdiVlc } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Vlc(props: IconComponentProps) {
  return <Icon path={mdiVlc} {...props} />;
}

export { mdiVlc as path };
