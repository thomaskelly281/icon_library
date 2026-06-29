import { mdiBikePedalMountain } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BikePedalMountain(props: IconComponentProps) {
  return <Icon path={mdiBikePedalMountain} {...props} />;
}

export { mdiBikePedalMountain as path };
