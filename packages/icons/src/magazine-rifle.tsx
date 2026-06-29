import { mdiMagazineRifle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagazineRifle(props: IconComponentProps) {
  return <Icon path={mdiMagazineRifle} {...props} />;
}

export { mdiMagazineRifle as path };
