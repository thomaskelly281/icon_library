import { mdiMenorah } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Menorah(props: IconComponentProps) {
  return <Icon path={mdiMenorah} {...props} />;
}

export { mdiMenorah as path };
