import { mdiCactus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cactus(props: IconComponentProps) {
  return <Icon path={mdiCactus} {...props} />;
}

export { mdiCactus as path };
