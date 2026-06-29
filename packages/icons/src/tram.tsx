import { mdiTram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tram(props: IconComponentProps) {
  return <Icon path={mdiTram} {...props} />;
}

export { mdiTram as path };
