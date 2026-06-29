import { mdiMagazinePistol } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagazinePistol(props: IconComponentProps) {
  return <Icon path={mdiMagazinePistol} {...props} />;
}

export { mdiMagazinePistol as path };
