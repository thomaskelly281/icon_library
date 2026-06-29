import { mdiSunglasses } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sunglasses(props: IconComponentProps) {
  return <Icon path={mdiSunglasses} {...props} />;
}

export { mdiSunglasses as path };
